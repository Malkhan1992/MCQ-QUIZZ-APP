// Data for different subjects
const subjectData = {
    'Science': [
        {
            question: "What is the closest planet to the sun?",
            options: ["Venus", "Earth", "Mars", "Mercury"],
            correct: 3
        },
        {
            question: "What gas do plants absorb from the atmosphere during photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
            correct: 1
        },
        {
            question: "What is the boiling point of water?",
            options: ["50°C", "100°C", "150°C", "200°C"],
            correct: 1
        },
        {
            question: "What force keeps us grounded on Earth?",
            options: ["Magnetism", "Gravity", "Friction", "Inertia"],
            correct: 1
        },
        {
            question: "Which part of the plant is responsible for making food?",
            options: ["Roots", "Stem", "Leaves", "Flowers"],
            correct: 2
        },
        {
            question: "What is the main component of the sun?",
            options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
            correct: 2
        },
        {
            question: "Which planet is known as the \"Red Planet\"?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            correct: 2
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            correct: 0
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Silver"],
            correct: 2
        },
        {
            question: "What type of energy is produced by moving water?",
            options: ["Solar Energy", "Wind Energy", "Geothermal Energy", "Hydroelectric Energy"],
            correct: 3
        }
    ],
    'Math': [
        {
            question: "What is 789 + 456?",
            options: ["1235", "1245", "1255", "1265"],
            correct: 1
        },
        {
            question: "What is 934 - 576?",
            options: ["348", "358", "368", "378"],
            correct: 2
        },
        {
            question: "What is 76 x 9?",
            options: ["654", "668", "684", "696"],
            correct: 2
        },
        {
            question: "What is 1583 + 267?",
            options: ["1840", "1850", "1860", "1870"],
            correct: 1
        },
        {
            question: "What is 543 - 198?",
            options: ["345", "355", "365", "375"],
            correct: 1
        },
        {
            question: "What is 36 x 12?",
            options: ["412", "424", "432", "444"],
            correct: 2
        },
        {
            question: "What is 892 + 347?",
            options: ["1235", "1239", "1243", "1249"],
            correct: 1
        },
        {
            question: "What is 1000 - 465?",
            options: ["525", "535", "545", "555"],
            correct: 1
        },
        {
            question: "What is 125 x 8?",
            options: ["960", "970", "980", "1000"],
            correct: 3
        },
        {
            question: "What is 159 + 264 + 378?",
            options: ["791", "801", "811", "821"],
            correct: 2
        }
    ],
    'English': [
        {
            question: "Fill in the blank with a noun: \"The ____ was very tall.\"",
            options: ["quickly", "he", "tree", "run"],
            correct: 2
        },
        {
            question: "Fill in the blank with a pronoun: \"____ is my best friend.\"",
            options: ["Dog", "Quickly", "She", "Happy"],
            correct: 2
        },
        {
            question: "Fill in the blank with a verb: \"They ____ to the park every day.\"",
            options: ["run", "happy", "tree", "quickly"],
            correct: 0
        },
        {
            question: "Fill in the blank with an adverb: \"He runs very ____.\"",
            options: ["happy", "quickly", "tree", "run"],
            correct: 1
        },
        {
            question: "Identify the noun in the sentence: \"The dog barked loudly.\"",
            options: ["barked", "loudly", "The", "dog"],
            correct: 3
        },
        {
            question: "Identify the pronoun in the sentence: \"I love reading books.\"",
            options: ["I", "love", "reading", "books"],
            correct: 0
        },
        {
            question: "Identify the verb in the sentence: \"She sings beautifully.\"",
            options: ["She", "sings", "beautifully", "None of the above"],
            correct: 1
        },
        {
            question: "Identify the adverb in the sentence: \"The children are playing outside.\"",
            options: ["The", "children", "playing", "outside"],
            correct: 3
        },
        {
            question: "Fill in the blank with a noun: \"Tom and Jerry are best ____.\"",
            options: ["are", "best", "friends", "and"],
            correct: 2
        },
        {
            question: "Fill in the blank with a pronoun: \"He gave ____ a gift.\"",
            options: ["gave", "her", "a", "gift"],
            correct: 1
        }
    ],
    'General Awareness': [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Rome"],
            correct: 2
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Jupiter", "Mars", "Venus", "Mercury"],
            correct: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Gl", "Au"],
            correct: 3
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Thailand", "Japan", "South Korea"],
            correct: 2
        },
        {
            question: "Who is known as the father of computers?",
            options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
            correct: 2
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
            correct: 2
        },
        {
            question: "Which is the nearest star to Earth?",
            options: ["Proxima Centauri", "Alpha Centauri", "Polaris", "The Sun"],
            correct: 3
        }
    ]
};

// Authorized student credentials
const validCredentials = [
    { name: "Aryan Singh", password: "Ar2016" },
    { name: "Aditya Singh", password: "Ad2017" }
];

// Global variables to track app state
let currentView = 'login';
let currentSubject = '';
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let questions = [];
let timerInterval = null;
let timeLeft = 90;
let studentName = '';
let studentEmail = '';
let studentPassword = '';
let quizStartTime = null;
let questionStartTime = null;
let questionTimeTaken = [];
let isRetry = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listener for the login button
    document.getElementById('login-button').addEventListener('click', handleLogin);
    
    // Password visibility toggle
    const passwordToggle = document.getElementById('password-toggle');
    const passwordInput = document.getElementById('student-password');
    
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.textContent = '👁️‍🗨️';
            } else {
                passwordInput.type = 'password';
                passwordToggle.textContent = '👁️';
            }
        });
    }
    
    // Check for stored name and email and fill in the form
    const storedName = localStorage.getItem('studentName');
    const storedEmail = localStorage.getItem('studentEmail');
    
    if (storedName) {
        const nameInput = document.getElementById('student-name');
        if (nameInput) nameInput.value = storedName;
    }
    
    if (storedEmail) {
        const emailInput = document.getElementById('student-email');
        if (emailInput) emailInput.value = storedEmail;
    }
});

// Student login with password verification
function handleLogin() {
    const nameInput = document.getElementById('student-name');
    const passwordInput = document.getElementById('student-password');
    const emailInput = document.getElementById('student-email');
    const passwordError = document.getElementById('password-error');
    
    if (!nameInput.value.trim() || !passwordInput.value.trim()) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Please enter both name and password.';
        return;
    }
    
    // Validate credentials
    const isValid = validCredentials.some(cred => 
        cred.name.toLowerCase() === nameInput.value.trim().toLowerCase() && 
        cred.password === passwordInput.value.trim()
    );
    
    if (!isValid) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Invalid name or password!';
        return;
    }
    
    // Credentials valid, proceed
    passwordError.style.display = 'none';
    
    studentName = nameInput.value.trim();
    studentPassword = passwordInput.value.trim();
    studentEmail = emailInput.value.trim();
    
    // Save to local storage
    localStorage.setItem('studentName', studentName);
    localStorage.setItem('studentEmail', studentEmail);
    
    showSubjectSelection();
}

// Navigation functions
function goToHome() {
    currentView = 'login';
    resetQuiz();
    clearInterval(timerInterval);
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Welcome to Knowledge World</h1>
        <div class="logo-container">
            <div class="logo-background"></div>
            <div class="stars"></div>
            <img src="earth_logo.png" alt="Earth Logo" class="logo-image">
        </div>
        
        <p class="welcome-text">Embark on an exciting journey of learning and discovery! Test your knowledge across various subjects and challenge yourself to excel!</p>
        
        <div id="login-form">
            <h2>Student Login</h2>
            <div class="form-group">
                <label for="student-name">Your Name:</label>
                <input type="text" id="student-name" class="form-control" placeholder="Enter your full name" required value="${studentName}">
            </div>
            <div class="form-group">
                <label for="student-password">Password:</label>
                <div class="password-field">
                    <input type="password" id="student-password" class="form-control" placeholder="Enter your password" required>
                    <button type="button" id="password-toggle" class="password-toggle">👁️</button>
                </div>
                <div id="password-error" class="error-message">Invalid name or password!</div>
            </div>
            <div class="form-group">
                <label for="student-email">Email (optional):</label>
                <input type="email" id="student-email" class="form-control" placeholder="Enter your email" value="${studentEmail}">
            </div>
            <button class="button" id="login-button">Start Quiz</button>
        </div>
    `;
    document.getElementById('login-button').addEventListener('click', handleLogin);
    
    // Password visibility toggle
    const passwordToggle = document.getElementById('password-toggle');
    const passwordInput = document.getElementById('student-password');
    
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.textContent = '👁️‍🗨️';
            } else {
                passwordInput.type = 'password';
                passwordToggle.textContent = '👁️';
            }
        });
    }
}

function showSubjectSelection() {
    currentView = 'subjects';
    clearInterval(timerInterval);
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
            ${studentEmail ? ` | <strong>Email:</strong> ${studentEmail}` : ''}
        </div>
        <h1>Select a Subject</h1>
        <p class="welcome-text">Choose a subject to begin your quiz adventure!</p>
        
        <div class="subject-buttons">
            <button class="subject-button general" onclick="selectSubject('General Awareness')">
                <i class="fas fa-globe"></i> General Awareness
            </button>
            <button class="subject-button science" onclick="selectSubject('Science')">
                <i class="fas fa-flask"></i> Science
            </button>
            <button class="subject-button math" onclick="selectSubject('Math')">
                <i class="fas fa-calculator"></i> Math
            </button>
            <button class="subject-button english" onclick="selectSubject('English')">
                <i class="fas fa-book"></i> English
            </button>
        </div>
        
        <div>
            <button class="button back-button" onclick="goToHome()">Logout</button>
            <button class="button" onclick="viewPreviousResults()">View My Results</button>
        </div>
    `;
}

function selectSubject(subject) {
    currentView = 'quiz';
    currentSubject = subject;
    resetQuiz();
    isRetry = false;
    questions = subjectData[subject];
    quizStartTime = new Date();
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName} | <strong>Subject:</strong> ${subject}
        </div>
        <h1>${subject} Quiz</h1>
        <div class="progress-bar">
            <div class="progress" id="progress"></div>
        </div>
        <div class="timer-text" id="timer-text">Time left: 90 seconds</div>
        <div class="timer-bar">
            <div class="timer" id="timer"></div>
        </div>
        <div id="quizContainer"></div>
        <div>
            <button class="button" id="nextButton">Next</button>
            <button class="button back-button" onclick="confirmExit()">Exit Quiz</button>
        </div>
    `;
    
    document.getElementById('nextButton').addEventListener('click', handleNextQuestion);
    startTimer();
    showQuestion();
}

function confirmExit() {
    if (confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
        clearInterval(timerInterval);
        showSubjectSelection();
    }
}

// View previous results
function viewPreviousResults() {
    const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const studentResults = allResults.filter(result => 
        result.student.toLowerCase() === studentName.toLowerCase()
    );
    
    if (studentResults.length === 0) {
        alert("You haven't taken any quizzes yet!");
        return;
    }
    
    const container = document.querySelector('.container');
    let resultsHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
            ${studentEmail ? ` | <strong>Email:</strong> ${studentEmail}` : ''}
        </div>
        <h1>Your Quiz Results</h1>
    `;
    
    studentResults.forEach((result, index) => {
        const date = new Date(result.date);
        const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
        const percentScore = ((result.score / result.maxScore) * 100).toFixed(1);
        
        resultsHTML += `
            <div class="result-container">
                <h3>${result.subject} Quiz - ${formattedDate}</h3>
                <p><strong>Score:</strong> ${result.score} / ${result.maxScore} (${percentScore}%)</p>
                <p><strong>Correct Answers:</strong> ${result.correctAnswers} out of ${result.totalQuestions}</p>
                <p><strong>Total Time:</strong> ${formatTime(result.totalTime)}</p>
                <button class="button" onclick="viewDetailedResult(${index})">View Details</button>
            </div>
        `;
    });
    
    resultsHTML += `
        <div>
            <button class="button back
