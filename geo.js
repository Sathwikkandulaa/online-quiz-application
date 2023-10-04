const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            A: " Berlin ",
            B: " Paris ",
            C: " Rome ",
            D: " Madrid "
        },
        correctAnswer: "B"
    },
    {
        question: "Which river is the longest in the world?",
        answers: {
            A: " Amazon ",
            B: " Nile ",
            C: " Mississippi ",
            D: " Yangtze "
        },
        correctAnswer: "B"
    },
    {
        question: "What is the largest desert in the world?",
        answers: {
            A: " Gobi Desert ",
            B: " Sahara Desert ",
            C: " Arabian Desert ",
            D: " Mojave Desert "
        },
        correctAnswer: "B"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
            A: " China ",
            B: " Japan ",
            C: " South Korea",
            D: " Vietnam "
        },
        correctAnswer: "B"
    },
    {
        question: "In which continent is the Amazon Rainforest located?",
        answers: {
            A: " Asia ",
            B: " South America ",
            C: " Africa",
            D: " Australia "
        },
        correctAnswer: "B"
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
let play=document.getElementById("answerA");
let play1=document.getElementById("answerB");
let play2=document.getElementById("answerC");
let play3=document.getElementById("answerD");

function playButton()
        {
            let audio1=new Audio("error.mp3");
            audio1.play();
        }
        function playButton1(){
            let audio2=new Audio("correct.mp3");
            audio2.play();
        }
        function playButton2(){
            let audio3=new Audio("error.mp3");
            audio3.play();
        }
        function playButton3(){
            let audio4=new Audio("error.mp3");
            audio4.play();
        }

        play.addEventListener("click",playButton)
        play1.addEventListener("click",playButton1)
        play2.addEventListener("click",playButton2)
        play3.addEventListener("click",playButton3)

nextButton.addEventListener("click", checkAnswer);
prevButton.addEventListener("click", goBack);

loadQuestion();
