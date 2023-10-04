const questions = [
    {
        question: "The Maurya Empire, one of the largest empires in ancient India, was founded by which ruler?",
        answers: {
            A: " Chandragupta Maurya ",
            B: " Ashoka ",
            C: " Shivaji ",
            D: " Akbar "
        },
        correctAnswer: "A"
    },
    {
        question: "Which famous ancient structure in Egypt is known for its association with the pharaohs and served as a tomb for them?",
        answers: {
            A: " Pyramids of Giza  ",
            B: " Taj Mahal ",
            C: " Parthenon ",
            D: " Great Wall of China "
        },
        correctAnswer: "A"
    },
    {
        question: "Which ancient civilization is known for its contributions to mathematics, including the concept of zero and the decimal system?",
        answers: {
            A: " Indus Valley Civilization",
            B: " Egyptian Civilization ",
            C: " Roman Civilzation ",
            D: " Anicent Greece "
        },
        correctAnswer: "A"
    },
    {
        question: "Who is often credited with discovering America in 1492 while searching for a western route to Asia?",
        answers: {
            A: " Christopher Columbus ",
            B: " Vasco da Gama ",
            C: " Ferdinand Magellan ",
            D: " Marco Polo"
        },
        correctAnswer: "A"
    },
    {
        question: "In which year did Mahatma Gandhi lead the famous Dandi March as part of the civil disobedience movement against British colonial rule?",
        answers: {
            A: " 1930",
            B: " 1942 ",
            C: " 1919 ",
            D: " 1922"
        },
        correctAnswer: "A"
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
            let audio1=new Audio("correct.mp3");
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