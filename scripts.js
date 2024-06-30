const questions = [
    {
        question: "¿Cuál es el verdadero nombre de Iron Man?",
        answers: [
            { text: "Tony Stark", correct: true },
            { text: "Bruce Wayne", correct: false },
            { text: "Steve Rogers", correct: false },
            { text: "Peter Parker", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre del martillo de Thor?",
        answers: [
            { text: "Mjolnir", correct: true },
            { text: "Stormbreaker", correct: false },
            { text: "Gungnir", correct: false },
            { text: "Vanir", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de doctor es Doctor Strange?",
        answers: [
            { text: "Neurocirujano", correct: true },
            { text: "Cardiólogo", correct: false },
            { text: "Dermatólogo", correct: false },
            { text: "Pediatra", correct: false }
        ]
    },
    {
        question: "¿Cuál es el verdadero nombre de Spider-Man?",
        answers: [
            { text: "Peter Parker", correct: true },
            { text: "Bruce Banner", correct: false },
            { text: "Tony Stark", correct: false },
            { text: "Clark Kent", correct: false }
        ]
    },
    {
        question: "¿De qué país es originario Black Panther?",
        answers: [
            { text: "Wakanda", correct: true },
            { text: "Genosha", correct: false },
            { text: "Latveria", correct: false },
            { text: "Sokovia", correct: false }
        ]
    },
    {
        question: "¿Qué material es el escudo del Capitán América?",
        answers: [
            { text: "Vibranium", correct: true },
            { text: "Adamantium", correct: false },
            { text: "Titanio", correct: false },
            { text: "Acero", correct: false }
        ]
    },
    {
        question: "¿Quién es el director de S.H.I.E.L.D.?",
        answers: [
            { text: "Nick Fury", correct: true },
            { text: "Phil Coulson", correct: false },
            { text: "Maria Hill", correct: false },
            { text: "Alexander Pierce", correct: false }
        ]
    },
    {
        question: "¿Cómo se llama la organización malvada a la que se enfrenta S.H.I.E.L.D.?",
        answers: [
            { text: "HYDRA", correct: true },
            { text: "A.I.M.", correct: false },
            { text: "The Hand", correct: false },
            { text: "The Brotherhood", correct: false }
        ]
    },
    {
        question: "¿Qué piedra del infinito obtiene Thanos primero?",
        answers: [
            { text: "Piedra del Poder", correct: true },
            { text: "Piedra del Espacio", correct: false },
            { text: "Piedra de la Realidad", correct: false },
            { text: "Piedra del Alma", correct: false }
        ]
    },
    {
        question: "¿Quién es el creador de Ultron?",
        answers: [
            { text: "Tony Stark", correct: true },
            { text: "Bruce Banner", correct: false },
            { text: "Hank Pym", correct: false },
            { text: "Reed Richards", correct: false }
        ]
    },
    {
        question: "¿Cómo se llama la hija adoptiva de Thanos?",
        answers: [
            { text: "Gamora", correct: true },
            { text: "Nebula", correct: false },
            { text: "Mantis", correct: false },
            { text: "Shuri", correct: false }
        ]
    },
    {
        question: "¿Qué actor interpreta a Thor en las películas de Marvel?",
        answers: [
            { text: "Chris Hemsworth", correct: true },
            { text: "Chris Evans", correct: false },
            { text: "Chris Pratt", correct: false },
            { text: "Chris Pine", correct: false }
        ]
    },
    {
        question: "¿En qué película de Marvel aparece por primera vez Black Panther?",
        answers: [
            { text: "Capitán América: Civil War", correct: true },
            { text: "Black Panther", correct: false },
            { text: "Avengers: Infinity War", correct: false },
            { text: "Avengers: Endgame", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre verdadero de Black Widow?",
        answers: [
            { text: "Natasha Romanoff", correct: true },
            { text: "Wanda Maximoff", correct: false },
            { text: "Carol Danvers", correct: false },
            { text: "Maria Hill", correct: false }
        ]
    },
    {
        question: "¿Cómo se llama el hermano de Thor?",
        answers: [
            { text: "Loki", correct: true },
            { text: "Baldur", correct: false },
            { text: "Hod", correct: false },
            { text: "Fenrir", correct: false }
        ]
    },
    {
        question: "¿Qué organización utiliza el eslogan 'Corta una cabeza, y dos más tomarán su lugar'?",
        answers: [
            { text: "HYDRA", correct: true },
            { text: "A.I.M.", correct: false },
            { text: "S.W.O.R.D.", correct: false },
            { text: "The Hand", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre real de la Bruja Escarlata?",
        answers: [
            { text: "Wanda Maximoff", correct: true },
            { text: "Jean Grey", correct: false },
            { text: "Raven Darkholme", correct: false },
            { text: "Ororo Munroe", correct: false }
        ]
    },
    {
        question: "¿En qué planeta encuentran a Thor en 'Avengers: Endgame'?",
        answers: [
            { text: "New Asgard", correct: true },
            { text: "Vormir", correct: false },
            { text: "Nidavellir", correct: false },
            { text: "Titan", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre del grupo de superhéroes al que pertenece Groot?",
        answers: [
            { text: "Guardianes de la Galaxia", correct: true },
            { text: "Vengadores", correct: false },
            { text: "X-Men", correct: false },
            { text: "Inhumanos", correct: false }
        ]
    },
    {
        question: "¿Qué personaje de Marvel es conocido como el 'Mercenario Bocazas'?",
        answers: [
            { text: "Deadpool", correct: true },
            { text: "Wolverine", correct: false },
            { text: "Punisher", correct: false },
            { text: "Ghost Rider", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre del alter ego de Hulk?",
        answers: [
            { text: "Bruce Banner", correct: true },
            { text: "Tony Stark", correct: false },
            { text: "Steve Rogers", correct: false },
            { text: "Clint Barton", correct: false }
        ]
    },
    {
        question: "¿Quién es el líder de los X-Men?",
        answers: [
            { text: "Profesor X", correct: true },
            { text: "Magneto", correct: false },
            { text: "Cyclops", correct: false },
            { text: "Wolverine", correct: false }
        ]
    },
    {
        question: "¿Cómo se llama el villano principal en 'Doctor Strange'?",
        answers: [
            { text: "Kaecilius", correct: true },
            { text: "Dormammu", correct: false },
            { text: "Barón Mordo", correct: false },
            { text: "Mephisto", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre verdadero de Star-Lord?",
        answers: [
            { text: "Peter Quill", correct: true },
            { text: "Scott Lang", correct: false },
            { text: "Peter Parker", correct: false },
            { text: "Clint Barton", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre del actor que interpreta a Iron Man?",
        answers: [
            { text: "Robert Downey Jr.", correct: true },
            { text: "Chris Evans", correct: false },
            { text: "Chris Hemsworth", correct: false },
            { text: "Mark Ruffalo", correct: false }
        ]
    },
    {
        question: "¿Qué superhéroe tiene un traje con tecnología de enanitos?",
        answers: [
            { text: "Ant-Man", correct: true },
            { text: "Iron Man", correct: false },
            { text: "Spider-Man", correct: false },
            { text: "Black Panther", correct: false }
        ]
    },
    {
        question: "¿Quién es el hermano gemelo de la Bruja Escarlata?",
        answers: [
            { text: "Quicksilver", correct: true },
            { text: "Vision", correct: false },
            { text: "Hawkeye", correct: false },
            { text: "Falcon", correct: false }
        ]
    },
    {
        question: "¿Cuál es el nombre de la madre de Tony Stark?",
        answers: [
            { text: "Maria Stark", correct: true },
            { text: "Pepper Potts", correct: false },
            { text: "May Parker", correct: false },
            { text: "Peggy Carter", correct: false }
        ]
    },
    {
        question: "¿Qué actor interpreta a Loki?",
        answers: [
            { text: "Tom Hiddleston", correct: true },
            { text: "Chris Hemsworth", correct: false },
            { text: "Mark Ruffalo", correct: false },
            { text: "Jeremy Renner", correct: false }
        ]
    },
    {
        question: "¿Qué superhéroe utiliza el escudo como arma principal?",
        answers: [
            { text: "Capitán América", correct: true },
            { text: "Iron Man", correct: false },
            { text: "Thor", correct: false },
            { text: "Hawkeye", correct: false }
        ]
    }
];
 
let currentUserId = null;
let timerInterval;
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
const totalQuestions = 10;

const registrationContainer = document.getElementById('registration-container');
const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const startContainer = document.getElementById('start-container');
const startButton = document.getElementById('start-btn');
const rulesContainer = document.getElementById('rules-container');
const exitButton = document.getElementById('exit-btn');
const continueButton = document.getElementById('continue-btn');
const examContainer = document.getElementById('exam-container');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const finishButton = document.getElementById('finish-btn');
const timerBarContainer = document.getElementById('timer-bar-container');
const timerBar = document.getElementById('timer-bar');
const timerBox = document.getElementById('timer-box');
const timerCount = document.getElementById('timer-count');
const rankingContainer = document.getElementById('ranking-container');
const rankingList = document.getElementById('ranking-list');
const rankingButton = document.getElementById('ranking-btn');
const closeRankingButton = document.getElementById('close-ranking-btn');
const currentQuestionSpan = document.getElementById('current-question');

document.addEventListener('DOMContentLoaded', () => {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        registerUser(username);
    });

    startButton.addEventListener('click', showRules);
    exitButton.addEventListener('click', showRegistration);
    continueButton.addEventListener('click', startExam);
    restartButton.addEventListener('click', showStartScreen);
    finishButton.addEventListener('click', showRegistration);
    rankingButton.addEventListener('click', showRanking);
    closeRankingButton.addEventListener('click', closeRanking);

    showInitialScreen();
});

function showInitialScreen() {
    rankingButton.style.display = 'block';
    registrationContainer.classList.remove('hidden');
    startContainer.classList.add('hidden');
    rulesContainer.classList.add('hidden');
    examContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    rankingContainer.classList.add('hidden');
}

function registerUser(username) {
    fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username }),
    })
    .then(response => response.json())
    .then(data => {
        currentUserId = data.user_id;
        registrationContainer.classList.add('hidden');
        startContainer.classList.remove('hidden');
        rankingButton.style.display = 'none';
    })
    .catch(error => console.error('Error:', error));
}

function showRules() {
    startContainer.classList.add('hidden');
    rulesContainer.classList.remove('hidden');
    rankingButton.style.display = 'none';
}

function showStartScreen() {
    rulesContainer.classList.add('hidden');
    examContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    startContainer.classList.remove('hidden');
    rankingButton.style.display = 'none';
}

function showRegistration() {
    rulesContainer.classList.add('hidden');
    startContainer.classList.add('hidden');
    examContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    registrationContainer.classList.remove('hidden');
    rankingButton.style.display = 'block';
}

function startExam() {
    rulesContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    timerBarContainer.classList.remove('hidden');
    timerBox.classList.remove('hidden');
    finishButton.classList.add('hidden');
    nextButton.classList.add('hidden');
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = shuffleArray(questions).slice(0, totalQuestions).map(question => ({
        ...question,
        answers: shuffleArray(question.answers)
    }));
    showQuestion(selectedQuestions[currentQuestionIndex]);
    startTimer();
    rankingButton.style.display = 'none';
}

function showQuestion(question) {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('li');
        button.textContent = answer.text;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });
    nextButton.classList.add('hidden');
    resetTimer();
    timerBarContainer.classList.remove('hidden');
    timerBox.classList.remove('hidden');
}

function selectAnswer(button, correct) {
    clearInterval(timerInterval);
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        Array.from(answerButtonsElement.children).forEach(btn => {
            if (btn.textContent === selectedQuestions[currentQuestionIndex].answers.find(a => a.correct).text) {
                btn.classList.add('correct');
                btn.style.backgroundColor = '#00ff3c';
            }
        });
    }
    nextButton.classList.remove('hidden');
}


nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(selectedQuestions[currentQuestionIndex]);
        startTimer();
    } else {
        endExam();
    }
});

function endExam() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    finishButton.classList.remove('hidden');
    timerBarContainer.classList.add('hidden');
    saveResult(score);
    scoreElement.textContent = `Tu puntaje fue ${score} de ${selectedQuestions.length}`;
    if (score >= 8) {
        resultMessage.textContent = '¡Felicitaciones! 🎉, Conseguiste ' + score + ' de ' + selectedQuestions.length;
    } else if (score >= 5) {
        resultMessage.textContent = '¡Que bien! 😎, Conseguiste ' + score + ' de ' + selectedQuestions.length;
    } else if (score >= 3) {
        resultMessage.textContent = '¡Hay que estudiar! 😅, Conseguiste ' + score + ' de ' + selectedQuestions.length;
    } else {
        resultMessage.textContent = 'Lo siento 😞, Conseguiste ' + score + ' de ' + selectedQuestions.length;
    }
    rankingButton.style.display = 'none';
}

function saveResult(score) {
    fetch('http://127.0.0.1:8000/saveResult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: currentUserId, score: score }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Result saved:', data);
    })
    .catch(error => console.error('Error:', error));
}

function startTimer() {
    let timeLeft = 15;
    timerCount.textContent = timeLeft;
    timerBar.style.width = '100%';
    timerBar.classList.remove('timer-bar-red');
    timerBar.classList.add('timer-bar-green');
    timerInterval = setInterval(() => {
        timeLeft--;
        timerCount.textContent = timeLeft;
        timerBar.style.width = (timeLeft / 15) * 100 + '%';
        if (timeLeft <= 5) {
            timerBar.classList.remove('timer-bar-green');
            timerBar.classList.add('timer-bar-red');
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            markAsUnanswered();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerCount.textContent = '15';
    timerBar.style.width = '100%';
    timerBar.classList.remove('timer-bar-red');
    timerBar.classList.add('timer-bar-green');
}

function showCorrectAnswer() {
    const correctAnswer = selectedQuestions[currentQuestionIndex].answers.find(a => a.correct).text;
    Array.from(answerButtonsElement.children).forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
            btn.style.backgroundColor = '#00ff3c';
        } else {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
    });
}

function markAsUnanswered() {
    showCorrectAnswer();
    nextButton.classList.remove('hidden');
}

function showRanking() {
    rankingButton.style.display = 'none';
    fetch('http://127.0.0.1:8000/top5results')
        .then(response => response.json())
        .then(data => {
            rankingList.innerHTML = '';
            data.forEach((result, index) => {
                const row = document.createElement('tr');
                const positionCell = document.createElement('td');
                positionCell.textContent = index + 1;
                const nameCell = document.createElement('td');
                nameCell.textContent = result.name;
                const scoreCell = document.createElement('td');
                scoreCell.textContent = result.score;
                row.appendChild(positionCell);
                row.appendChild(nameCell);
                row.appendChild(scoreCell);
                rankingList.appendChild(row);
            });
            rankingContainer.classList.remove('hidden');
        })
        .catch(error => console.error('Error:', error));
}

function closeRanking() {
    rankingContainer.classList.add('hidden');
    rankingButton.style.display = 'block';
}

const deleteUsersButton = document.getElementById('delete-users-btn');

deleteUsersButton.addEventListener('click', () => {
    fetch('http://127.0.0.1:8000/deleteUsers', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Database reset:', data);
        alert('Todos los usuarios y resultados han sido borrados.');
    })
    .catch(error => console.error('Error:', error));
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}