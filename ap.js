const questions = [
    {
        question: "If 3 pencils cost 15 cents, how much do 8 pencils cost?",
        answers: {
            A: " 20 cents ",
            B: " 40 cents ",
            C: " 10 cents ",
            D: " 45 cents "
        },
        correctAnswer: "B"
    },
    {
        question: "If a car travels 180 miles in 3 hours, what is its average speed in miles per hour (mph)?",
        answers: {
            A: " 90 mph ",
            B: " 120 mph ",
            C: " 45 mph ",
            D: " 60 mph "
        },
        correctAnswer: "D"
    },
    {
        question: "If the price of a book is reduced by 20%, and the new price is $16, what was the original price of the book?",
        answers: {
            A: " $24",
            B: " $20",
            C: " $18",
            D: " $32"
        },
        correctAnswer: "A"
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
            B: " 4 years ",
            C: " 6 years ",
            D: " 8 years "
        },
        correctAnswer: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerInputs = document.querySelectorAll("input[type='radio']");
const nextButton = document.getElementById("next-button");
const prevButton = document.querySelector(".prev-button") // Add a Previous button
const resultContainer = document.querySelector(".result-container");
const scoreDisplay = document.getElementById("score");

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

        // Disable the Previous button on the first question
        prevButton.disabled = currentQuestionIndex === 0;
    } else {
        showResults();
    }
}

function showResults() {
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