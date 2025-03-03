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
    'General Awareness': [
        {
            question: "Sample General Awareness question 1?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0
        },
        {
            question: "Sample General Awareness question 2?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 1
        }
    ],
    'Math': [
        {
            question: "Sample Math question 1?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0
        },
        {
            question: "Sample Math question 2?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 1
        }
    ],
    'English': [
        {
            question: "Sample English question 1?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0
        },
        {
            question: "Sample English question 2?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 1
        }
    ]
};

// Global variables to track app state
let currentView = 'home';
let currentSubject = '';
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let questions = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listener for the start button
    document.getElementById('startButton').addEventListener('click', showSubjectSelection);
});

// Navigation functions
function goToHome() {
    currentView = 'home';
    resetQuiz();
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Enter in Knowledge World</h1>
        <img src="earth_logo.png" alt="Earth Logo" width="200">
        <div>
            <a href="#" class="button" id="startButton">Let's Start</a>
        </div>
    `;
    document.getElementById('startButton').addEventListener('click', showSubjectSelection);
}

function showSubjectSelection() {
    currentView = 'subjects';
    const container = document.querySelector('.container');
    container.innerHTML = `
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
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>${subject} Quiz</h1>
        <div class="progress-bar">
            <div class="progress" id="progress"></div>
        </div>
        <div id="quizContainer"></div>
        <div>
            <button class="button" id="nextButton">Next</button>
            <button class="button back-button" onclick="showSubjectSelection()">Back to Subjects</button>
        </div>
    `;
    
    document.getElementById('nextButton').addEventListener('click', handleNextQuestion);
    showQuestion();
}

// Quiz functions
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(questions.length).fill(-1);
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
    // Check if an answer is selected
    if (userAnswers[currentQuestion] === -1) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    // Calculate score
    if (userAnswers[currentQuestion] === questions[currentQuestion].correct) {
        score += 2;
    } else {
        score -= 0.5;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const container = document.querySelector('.container');
    
    let resultsHTML = `
        <h1>Quiz Results - ${currentSubject}</h1>
        <div class="result-container">
            <h2>Your Score: ${score} / ${questions.length * 2}</h2>
            <p>You answered ${userAnswers.filter((answer, index) => answer === questions[index].correct).length} 
               out of ${questions.length} questions correctly.</p>
        </div>
        <h3>Detailed Results:</h3>
    `;
    
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        
        resultsHTML += `
            <div class="result-container" style="text-align: left; margin-bottom: 10px;">
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                <p>Your Answer: ${userAnswer >= 0 ? q.options[userAnswer] : 'Not answered'}</p>
                <p>Correct Answer: ${q.options[q.correct]}</p>
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
}