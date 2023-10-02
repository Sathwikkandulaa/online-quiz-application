const questions = [
    {
        question: "Which part of the Indian Constitution contains the Directive Principles of State Policy?",
        answers: {
            A: " Part I",
            B: " Part II",
            C: " Part III",
            D: " Part IV"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the maximum number of members that can be appointed to the Rajya Sabha by the President of India?",
        answers: {
            A: " 12",
            B: " 10",
            C: " 14",
            D: " 16"
        },
        correctAnswer: "A"
    },
    {
        question: "Who is the head of the executive branch of the Indian government?",
        answers: {
            A: " President",
            B: " Prime Minister",
            C: " Chief Justice of India",
            D: " Speaker of the Lok Sabha"
        },
        correctAnswer: "B"
    },
    {
        question: "Who has the authority to proclaim a financial emergency in India?",
        answers: {
            A: " President ",
            B: " Prime Minister ",
            C: " Comptroller and Auditor General ",
            D: " Chief Justice of India "
        },
        correctAnswer: "A"
    },
    {
        question: "In which year was the Goods and Services Tax (GST) introduced in India to replace various indirect taxes?",
        answers: {
            A: " 2020 ",
            B: " 2015 ",
            C: " 2017 ",
            D: " 2010 "
        },
        correctAnswer: "C"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerInputs = document.querySelectorAll("input[type='radio']");
const nextButton = document.getElementById("next-button");
const prevButton = document.querySelector(".prev-button")
const resultContainer = document.querySelector(".result-container");
const scoreDisplay = document.getElementById("score");
const container=document.querySelector(".quiz-container");

function loadQuestion() {
    answerInputs.forEach((input) => {
        input.checked = false;
    });
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

        for (let i = 0; i < answerInputs.length; i++) {
            const answer = currentQuestion.answers[answerInputs[i].value];
            answerInputs[i].nextSibling.textContent = answer;
        }
        prevButton.disabled = currentQuestionIndex === 0;
    } else {
        showResults();
    }
}

function showResults() {
    container.classList.add("disable");
    questionText.textContent = "Quiz Completed!";
    resultContainer.style.display = "block";
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }
}

function goBack() {
    currentQuestionIndex--;
    loadQuestion();
}

nextButton.addEventListener("click", checkAnswer);
prevButton.addEventListener("click", goBack); 

loadQuestion();