// Questions and Answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
        answer: "C"
    },
    {
        question: "What is 5 + 7?",
        options: ["A. 12", "B. 10", "C. 13", "D. 11"],
        answer: "A"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["A. Harper Lee", "B. J.K. Rowling", "C. Ernest Hemingway", "D. Mark Twain"],
        answer: "A"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Venus", "C. Mars", "D. Jupiter"],
        answer: "C"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Clear previous options
    optionsElement.innerHTML = "";

    // Load current question
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    // Load options
    current.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option[0]); // Send "A", "B", etc.
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (answer === correctAnswer) {
        score++;
    }

    // Move to the next question or end quiz
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");

    quizElement.style.display = "none";
    resultElement.textContent =`Quiz Over! Your final score is: ${score}/${questions.length}`;
}

// Initialize Quiz
loadQuestion();
