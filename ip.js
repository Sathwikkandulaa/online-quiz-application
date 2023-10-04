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
            A: " 16",
            B: " 10",
            C: " 14",
            D: " 12"
        },
        correctAnswer: "D"
    },
    {
        question: "Who is the head of the executive branch of the Indian government?",
        answers: {
            A: " President ",
            B: " Speaker of the Lok Sabha ",
            C: " Chief Justice of India ",
            D: " Prime Minister "
        },
        correctAnswer: "D"
    },
    {
        question: "Who has the authority to proclaim a financial emergency in India?",
        answers: {
            A: " Chief Justice of India",
            B: " Prime Minister ",
            C: " Comptroller and Auditor General ",
            D: " President "
        },
        correctAnswer: "D"
    },
    {
        question: "In which year was the Goods and Services Tax (GST) introduced in India to replace various indirect taxes?",
        answers: {
            A: " 2020 ",
            B: " 2015 ",
            C: " 2010 ",
            D: " 2017 "
        },
        correctAnswer: "D"
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
    const audio = new Audio();
    audio.src = "mouse-click.mp3";
    const selectedAnswer = document.querySelector("input[name='answer']:checked");
    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            audio.play();
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
            let audio2=new Audio("error.mp3");
            audio2.play();
        }
        function playButton2(){
            let audio3=new Audio("error.mp3");
            audio3.play();
        }
        function playButton3(){
            let audio4=new Audio("correct.mp3");
            audio4.play();
        }

        play.addEventListener("click",playButton)
        play1.addEventListener("click",playButton1)
        play2.addEventListener("click",playButton2)
        play3.addEventListener("click",playButton3)

nextButton.addEventListener("click", checkAnswer);
prevButton.addEventListener("click", goBack); 

loadQuestion();