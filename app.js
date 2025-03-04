// Data for different subjects
const subjectData = { /* ... (unchanged) ... */ };

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
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
        .subject-button {
            transition: all 0.3s ease;
            transform: scale(1);
            border: none;
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 15px;
            font-size: 1.2em;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            background-size: 200% auto;
        }
        .subject-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 8px rgba(0,0,0,0.2);
        }
        .general { background-image: linear-gradient(45deg, #4CAF50, #45a049); }
        .science { background-image: linear-gradient(45deg, #9C27B0, #673AB7); }
        .math { background-image: linear-gradient(45deg, #2196F3, #3F51B5); }
        .english { background-image: linear-gradient(45deg, #FF9800, #F44336); }
        
        .logo-background {
            background: radial-gradient(circle at center, #1a237e 0%, #0d47a1 100%) !important;
            box-shadow: 0 0 30px rgba(26, 35, 126, 0.5);
        }
        .stars::after {
            content: '';
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite;
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Existing initialization code...
    document.getElementById('login-button').addEventListener('click', handleLogin);
    // Password toggle code...
});

// Modified handleLogin function (unchanged except styling)

function showSubjectSelection() {
    currentView = 'subjects';
    clearInterval(timerInterval);
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
            ${studentEmail ? ` | <strong>Email:</strong> ${studentEmail}` : ''}
        </div>
        <h1 style="color: #2c3e50;">Select a Subject</h1>
        <p class="welcome-text" style="color: #7f8c8d; font-size: 1.1em;">Choose your adventure in knowledge!</p>
        
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
        
        <div style="margin-top: 30px;">
            <button class="button back-button" onclick="goToHome()" style="background: #e74c3c;">Logout</button>
            <button class="button" onclick="viewPreviousResults()" style="background: #3498db;">View My Results</button>
        </div>
    `;
}

// Modified submitQuiz function
function submitQuiz() {
    clearInterval(timerInterval);
    const totalTime = (new Date() - quizStartTime) / 1000;

    if (!isRetry) {
        const resultData = {
            student: studentName,
            email: studentEmail,
            subject: currentSubject,
            score: score,
            maxScore: questions.length * 10,
            correctAnswers: score / 10,
            totalQuestions: questions.length,
            date: new Date().toISOString(),
            totalTime: totalTime,
            details: userAnswers.map((answer, index) => ({
                question: questions[index].question,
                selected: answer.selected,
                correct: answer.correct,
                timeTaken: questionTimeTaken[index]
            }))
        };

        const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
        allResults.push(resultData);
        localStorage.setItem('quizResults', JSON.stringify(allResults));
    }

    // Quiz completion HTML with enhanced styling
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName} | <strong>Subject:</strong> ${currentSubject}
        </div>
        <h1 style="color: #27ae60;">Quiz Completed!</h1>
        <div class="result-summary" style="background: #ecf0f1; padding: 20px; border-radius: 10px;">
            <h2 style="color: #2c3e50;">Your Score: ${score}/${questions.length * 10}</h2>
            <p style="font-size: 1.2em;">Correct Answers: ${score/10}/${questions.length}</p>
            <p style="font-size: 1.2em;">Time Taken: ${formatTime(totalTime)}</p>
        </div>
        <div style="margin-top: 30px;">
            <button class="button" onclick="showSubjectSelection()" style="background: #3498db;">New Quiz</button>
            <button class="button" onclick="viewPreviousResults()" style="background: #9b59b6;">View Results</button>
            <button class="button" onclick="retryQuiz()" style="background: #e67e22;">Retry</button>
        </div>
    `;
}

function retryQuiz() {
    isRetry = true;
    selectSubject(currentSubject);
}

// Enhanced viewPreviousResults with PDF download
function viewPreviousResults() {
    const allResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    const studentResults = allResults.filter(result => 
        result.student.toLowerCase() === studentName.toLowerCase()
    );
    
    const container = document.querySelector('.container');
    let resultsHTML = `
        <div class="student-info">
            <strong>Student:</strong> ${studentName}
            ${studentEmail ? ` | <strong>Email:</strong> ${studentEmail}` : ''}
        </div>
        <h1 style="color: #2c3e50;">Your Quiz Results</h1>
        <button class="button" onclick="generatePDF()" style="background: #e74c3c; margin-bottom: 20px;">Download PDF</button>
    `;
    
    studentResults.forEach((result, index) => {
        resultsHTML += `
            <div class="result-container" style="background: #f8f9fa; padding: 20px; margin: 10px 0; border-radius: 10px;">
                <h3 style="color: #2980b9;">${result.subject} Quiz</h3>
                <p>Score: ${result.score}/${result.maxScore}</p>
                <p>Date: ${new Date(result.date).toLocaleString()}</p>
                <button class="button" onclick="viewDetailedResult(${index})" style="background: #3498db;">Details</button>
            </div>
        `;
    });
    
    container.innerHTML = resultsHTML + `<button class="button back-button" onclick="showSubjectSelection()" style="background: #7f8c8d;">Back</button>`;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(18);
    doc.text(`Quiz Results for ${studentName}`, 15, 20);
    
    const allResults = JSON.parse(localStorage.getItem('quizResults') || []);
    let y = 30;
    
    allResults.forEach(result => {
        if(result.student === studentName) {
            doc.setFontSize(12);
            doc.text(`Subject: ${result.subject}`, 15, y);
            doc.text(`Score: ${result.score}/${result.maxScore}`, 15, y+10);
            doc.text(`Date: ${new Date(result.date).toLocaleDateString()}`, 15, y+20);
            y += 30;
        }
    });
    
    doc.save('quiz-results.pdf');
}

// Other helper functions remain unchanged
