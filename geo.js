const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            A: "Berlin",
            B: "Madrid",
            C: "Rome",
            D: "Paris"
        },
        correctAnswer: "D"
    },
    {
        question: "Which river is the longest in the world?",
        answers: {
            A: "Amazon",
            B: "Nile",
            C: "Mississippi",
            D: "Yangtze"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the largest desert in the world?",
        answers: {
            A: "Gobi Desert",
            B: "Sahara Desert",
            C: "Arabian Desert",
            D: "Mojave Desert"
        },
        correctAnswer: "B"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
            A: "China",
            B: "South Korea",
            C: "Japan",
            D: "Vietnam"
        },
        correctAnswer: "C"
    },
    {
        question: "In which continent is the Amazon Rainforest located?",
        answers: {
            A: "Asia",
            B: "Africa",
            C: "South America",
            D: "Australia"
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
const logout=()=>{

    const link=document.createElement("a");
    link.href="/index.html";
    link.innerText="LogOut";
    link.style.padding="3px";
    link.style.borderRadius="5px";
    link.style.border="1px solid white";
    link.style.color="black";
    link.style.textDecoration="none";
    link.style.margin="10px";

    const ast=document.querySelector(".btn");
        if(document.querySelector(".btn2").nextSibling===null){
        ast.appendChild(link);
        }else{
            
            document.querySelector(".btn2").nextSibling.remove();
        }
    
}