<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCQ Test Application</title>
    <style>
        /* Add some basic styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            margin: 50px auto;
            max-width: 800px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 5px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }
        .back-button {
            background-color: #6c757d;
        }
        .option-button {
            display: block;
            width: 100%;
            text-align: left;
            padding: 10px;
            margin: 5px 0;
            background-color: #f8f9fa;
            color: #212529;
            border: 1px solid #dee2e6;
            border-radius: 5px;
            cursor: pointer;
        }
        .option-button:hover {
            background-color: #e9ecef;
        }
        .option-button.selected {
            background-color: #cfe2ff;
            border-color: #b6d4fe;
        }
        .result-container {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        .question-text {
            font-size: 18px;
            margin-bottom: 15px;
            text-align: left;
        }
        .progress-bar {
            background-color: #e9ecef;
            border-radius: 5px;
            margin-bottom: 20px;
            overflow: hidden;
        }
        .progress {
            height: 20px;
            background-color: #007bff;
            width: 0%;
            transition: width 0.3s;
        }
        .timer-bar {
            background-color: #e9ecef;
            border-radius: 5px;
            margin-bottom: 20px;
            height: 20px;
            overflow: hidden;
        }
        .timer {
            height: 100%;
            background-color: #28a745;
            width: 100%;
            transition: width 1s linear;
        }
        .timer.warning {
            background-color: #ffc107;
        }
        .timer.danger {
            background-color: #dc3545;
        }
        .form-group {
            margin-bottom: 15px;
            text-align: left;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            font-size: 16px;
        }
        .timer-text {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .student-info {
            text-align: left;
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Enter in Knowledge World</h1>
        <img src="earth_logo.png" alt="Earth Logo" width="200">
        
        <div id="login-form">
            <h2>Student Information</h2>
            <div class="form-group">
                <label for="student-name">Your Name:</label>
                <input type="text" id="student-name" class="form-control" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
                <label for="student-email">Email (optional):</label>
                <input type="email" id="student-email" class="form-control" placeholder="Enter your email">
            </div>
            <button class="button" id="login-button">Start Quiz</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
