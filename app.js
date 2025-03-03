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
let quizStartTime = null;
let questionStartTime = null;
let questionTimeTaken = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listener for the login button
    document.getElementById('login-button').addEventListener('click', handleLogin);
});

// Student login
function handleLogin() {
    const nameInput = document.getElementById('student-name');
    const emailInput = document.getElementById('student-email');
    
    if (!nameInput.value.trim()) {
        alert('Please enter your name to continue.');
        return;
    }
    
    studentName = nameInput.value.trim();
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
        <h1>Enter in Knowledge World</h1>
        <img src="earth_logo.png" alt="Earth Logo" width="200">
        
        <div id="login-form">
            <h2>Student Information</h2>
            <div class="form-group">
                <label for="student-name">Your Name:</label>
                <input type="text" id="student-name" class="form-control" placeholder="Enter your full name" required value="${studentName}">
            </div>
            <div class="form-group">
                <label for="student-email">Email (optional):</label>
                <input type="email" id="student-email" class="form-control" placeholder="Enter your email" value="${studentEmail}">
            </div>
            <button class="button" id="login-button">Start Quiz</button>
        </div>
    `;
    document.getElementById('login-button').addEventListener('click', handleLogin);
}

function showSubjectSelection() {
    currentView = 'subjects';
    clearInterval(timerInterval);
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
        </div>
        <h1>Select a Subject</h1>
        <div>
            <a href="#" class="button" onclick="selectSubject('General Awareness')">General Awareness</a>
            <a href="#" class="button" onclick="selectSubject('Science')">Science</a>
            <a href="#" class="button" onclick="selectSubject('Math')">Math</a>
            <a href="#" class="button" onclick="selectSubject('English')">English</a>
        </div>
        <div>
            <a href="#" class="button back-button" onclick="goToHome()">Back</a>
        </div>
    `;
}

function selectSubject(subject) {
    currentView = 'quiz';
    currentSubject = subject;
    resetQuiz();
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

// Quiz functions
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(questions.length).fill(-1);
    questionTimeTaken = Array(questions.length).fill(0);
    clearInterval(timerInterval);
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 90;
    questionStartTime = new Date();
    updateTimerDisplay();
    
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Auto-submit this question if time runs out
            const notAnswered = userAnswers[currentQuestion] === -1;
            if (notAnswered) {
                // If no answer selected, record as incorrect
                userAnswers[currentQuestion] = -2; // special code for timeout
            }
            questionTimeTaken[currentQuestion] = 90; // Max time
            handleNextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerText = document.getElementById('timer-text');
    const timerBar = document.getElementById('timer');
    
    timerText.textContent = `Time left: ${timeLeft} seconds`;
    
    // Update timer bar width
    const percentage = (timeLeft / 90) * 100;
    timerBar.style.width = `${percentage}%`;
    
    // Update color based on time remaining
    if (timeLeft <= 15) {
        timerBar.className = 'timer danger';
    } else if (timeLeft <= 30) {
        timerBar.className = 'timer warning';
    } else {
        timerBar.className = 'timer';
    }
}

function showQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        const progressPercent = (currentQuestion / questions.length) * 100;
        document.getElementById('progress').style.width = `${progressPercent}%`;
        
        let optionsHTML = '';
        q.options.forEach((option, index) => {
            const isSelected = userAnswers[currentQuestion] === index;
            optionsHTML += `
                <button class="option-button ${isSelected ? 'selected' : ''}" 
                        data-index="${index}" 
                        onclick="selectAnswer(${index})">
                    ${String.fromCharCode(97 + index)}) ${option}
                </button>
            `;
        });
        
        quizContainer.innerHTML = `
            <div class="question-text">
                <strong>${currentQuestion + 1}. ${q.question}</strong>
            </div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        `;
        
        // Update Next button text
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next';
        
        // Reset timer for this question
        startTimer();
    } else {
        showResults();
    }
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    
    // Update selected button UI
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (parseInt(button.dataset.index) === index) {
            button.classList.add('selected');
        }
    });
}

function handleNextQuestion() {
    clearInterval(timerInterval);
    
    // Calculate time taken for this question
    const timeSpent = 90 - timeLeft;
    questionTimeTaken[currentQuestion] = timeSpent;
    
    // Check if an answer is selected or if it timed out
    if (userAnswers[currentQuestion] === -1) {
        alert('Please select an answer before proceeding.');
        startTimer(); // Restart the timer for this question
        return;
    }
    
    // Calculate score if an actual answer was selected (not timeout)
    if (userAnswers[currentQuestion] !== -2) {
        if (userAnswers[currentQuestion] === questions[currentQuestion].correct) {
            score += 2;
        } else {
            score -= 0.5;
        }
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    const quizEndTime = new Date();
    const totalQuizTime = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    
    const container = document.querySelector('.container');
    
    let resultsHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
            ${studentEmail ? `| <strong>Email:</strong> ${studentEmail}` : ''}
        </div>
        <h1>Quiz Results - ${currentSubject}</h1>
        <div class="result-container">
            <h2>Your Score: ${score} / ${questions.length * 2}</h2>
            <p>You answered ${userAnswers.filter((answer, index) => answer === questions[index].correct).length} 
               out of ${questions.length} questions correctly.</p>
            <p>Total time: ${formatTime(totalQuizTime)}</p>
        </div>
        <h3>Detailed Results:</h3>
    `;
    
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = "Not answered (timeout)";
        
        if (userAnswer >= 0) {
            isCorrect = userAnswer === q.correct;
            userAnswerText = q.options[userAnswer];
        }
        
        resultsHTML += `
            <div class="result-container" style="text-align: left; margin-bottom: 10px;">
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                <p>Your Answer: ${userAnswerText}</p>
                <p>Correct Answer: ${q.options[q.correct]}</p>
                <p>Time taken: ${questionTimeTaken[index]} seconds</p>
                <p style="color: ${isCorrect ? 'green' : 'red'}">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </p>
            </div>
        `;
    });
    
    resultsHTML += `
        <div>
            <button class="button" onclick="selectSubject('${currentSubject}')">Retry Quiz</button>
            <button class="button back-button" onclick="showSubjectSelection()">Back to Subjects</button>
            <button class="button back-button" onclick="goToHome()">Back to Home</button>
        </div>
    `;
    
    container.innerHTML = resultsHTML;
    
    // Store results in localStorage
    saveQuizResults(totalQuizTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

// Function to save results to localStorage
function saveQuizResults(totalTime) {
    const results = {
        student: studentName,
        email: studentEmail,
        subject: currentSubject,
        score: score,
        maxScore: questions.length * 2,
        correctAnswers: userAnswers.filter((answer, index) => answer === questions[index].correct).length,
        totalQuestions: questions.length,
        totalTime: totalTime,
        date: new Date().toISOString(),
        questionTimeTaken: questionTimeTaken
    };
    
    // Get existing results or initialize new array
    let allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    allResults.push(results);
    
    // Save back to localStorage
    localStorage.setItem('quizResults', JSON.stringify(allResults));
}
