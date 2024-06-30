from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, desc
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de la conexión a la base de datos utilizando autenticación de Windows
DATABASE_URL = "mssql+pyodbc://GWNR71517/Exam?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Modelos de la base de datos
class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

class Result(Base):
    __tablename__ = "results"
    result_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    score = Column(Integer, nullable=False)
    date = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

# Esquemas de Pydantic
class UserCreate(BaseModel):
    name: str

class ResultCreate(BaseModel):
    user_id: int
    score: int




    

# Configuración del middleware CORS
origins = [
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/register")
def register_user(user: UserCreate):
    db = SessionLocal()
    db_user = User(name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()
    return {"user_id": db_user.user_id}

@app.post("/saveResult")
def save_result(result: ResultCreate):
    db = SessionLocal()
    db_result = Result(user_id=result.user_id, score=result.score)
    db.add(db_result)
    db.commit()
    db.close()
    return {"message": "Result saved"}

@app.get("/top5results")
def get_top_5_results():
    db = SessionLocal()
    top_results = db.query(Result).order_by(desc(Result.score)).limit(5).all()
    result_list = []
    for result in top_results:
        user = db.query(User).filter(User.user_id == result.user_id).first()
        result_list.append({"name": user.name, "score": result.score})
    db.close()
    return result_list

@app.delete("/deleteUsers")
def delete_users():
    db = SessionLocal()
    try:
        # Borrar todas las filas en la tabla 'results'
        db.query(Result).delete()
        # Borrar todas las filas en la tabla 'users'
        db.query(User).delete()
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Error deleting users and results")
    finally:
        db.close()
    return {"status": "all users and results deleted"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
