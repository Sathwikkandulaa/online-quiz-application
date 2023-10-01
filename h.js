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
            A: " Great Wall of China ",
            B: " Taj Mahal ",
            C: " Parthenon ",
            D: " Pyramids of Giza "
        },
        correctAnswer: "D"
    },
    {
        question: "Which ancient civilization is known for its contributions to mathematics, including the concept of zero and the decimal system?",
        answers: {
            A: " Roman Empire ",
            B: " Egyptian Civilization ",
            C: " Indus Valley Civilization ",
            D: " Anicent Greece "
        },
        correctAnswer: "C"
    },
    {
        question: "Who is often credited with discovering America in 1492 while searching for a western route to Asia?",
        answers: {
            A: " Vasco da Gama ",
            B: " Christopher Columbus ",
            C: " Ferdinand Magellan ",
            D: " Marco Polo"
        },
        correctAnswer: "B"
    },
    {
        question: "In which year did Mahatma Gandhi lead the famous Dandi March as part of the civil disobedience movement against British colonial rule?",
        answers: {
            A: " 1919",
            B: " 1942 ",
            C: " 1930 ",
            D: " 1922"
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