CREATE DATABASE Exam
go
use Exam

CREATE TABLE users (
    user_id INT PRIMARY KEY IDENTITY,
    name NVARCHAR(100) NOT NULL
);

CREATE TABLE results (
    result_id INT PRIMARY KEY IDENTITY,
    user_id INT FOREIGN KEY REFERENCES users(user_id),
    score INT NOT NULL,
    date DATETIME DEFAULT GETDATE()
);

select * from users;	

select * from results;

