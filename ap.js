const questions = [
    {
        question: "If 3 pencils cost 15 cents, how much do 8 pencils cost?",
        answers: {
            A: " 20 cents ",
            B: " 10 cents ",
            C: " 40 cents ",
            D: " 45 cents "
        },
        correctAnswer: "C"
    },
    {
        question: "If a car travels 180 miles in 3 hours, what is its average speed in miles per hour (mph)?",
        answers: {
            A: " 90 mph ",
            B: " 120 mph ",
            C: " 60 mph ",
            D: " 45 mph "
        },
        correctAnswer: "C"
    },
    {
        question: "If the price of a book is reduced by 20%, and the new price is $16, what was the original price of the book?",
        answers: {
            A: " $18",
            B: " $20",
            C: " $24",
            D: " $32"
        },
        correctAnswer: "C"
    },
    {
        question: "A garden is in the shape of a square with a side length of 10 meters. If a path of uniform width 1 meter is built around the garden, what is the area of the path?",
        answers: {
            A: " 99 sq. meters ",
            B: " 100 sq. meters ",
            C: " 121 sq. meters ",
            D: " 144 sq. meters "
        },
        correctAnswer: "C"
    },
    {
        question: " The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
        answers: {
            A: " 12 years ",
            B: " 6 years ",
            C: " 4 years ",
            D: " 8 years "
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
            let audio3=new Audio("correct.mp3");
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