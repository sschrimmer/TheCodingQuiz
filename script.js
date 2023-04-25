const questionCont = document.querySelector("#question-cont");
let currentQuestion = 0;
let currentQuestionIndex = 0;
const answerValidation = document.getElementById("validation");
const countTime = document.getElementById("count");

const quiz = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Cascading Style Sheets",
      "Graphic User Interface",
      "Creative Style Sheets",
      "HyperText Markup Language",
    ],
    answer: "HyperText Markup Language",
  },

  {
    question: "What does CSS stand for?",
    choices: [
      "HyperText Markup Language",
      "Cascading Style Sheets",
      "A command",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does JS stand for?",
    choices: [
      "JavaScript",
      "Just Scrolling",
      "Creative Style Sheets",
      "Nothing at all",
    ],
    answer: "JavaScript",
  },
  {
    question: "What is the DOM",
    choices: [
      "JavaScript",
      "Just Scrolling",
      "Creative Style Sheets",
      "Document Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "What does API stand for?",
    choices: [
      "JavaScript",
      "Just Scrolling",
      "Creative Style Sheets",
      "Application Programming Interface",
    ],
    answer: "Application Programming Interface",
  },
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
let count = 90;
function startQuiz() {
  let timer = setInterval(() => {
    countTime.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(timer);
    }
  }, 1000);
  document.querySelector("#welcomeScreen").style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  questionCont.innerHTML = "";
  let questionEl = document.createElement("h3");
  questionEl.textContent = quiz[currentQuestion].question;
  questionCont.append(questionEl);
  for (i = 0; i < quiz[currentQuestion].choices.length; i++) {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = quiz[currentQuestion].choices[i];
    choiceButton.style.display = "block";
    questionCont.append(choiceButton);
  }
}

function handleQuestionClick(event) {
  let selectedChoice = event.target.textContent;
  if (selectedChoice === quiz[currentQuestion].answer) {
    answerValidation.style.display = "block";
    answerValidation.style.color = "green";
    answerValidation.textContent = "Correct!!!";
    currentQuestionIndex +=1 
    console.log(currentQuestionIndex)
    setTimeout(() => {
      answerValidation.style.display = "none";
    }, 5000);
  } else {
    answerValidation.style.display = "block";
    console.log("wrong");
    answerValidation.textContent = "Wrong!!!";
    answerValidation.style.color = "red";
    currentQuestionIndex +=1 
    console.log(currentQuestionIndex)
    setTimeout(() => {
      answerValidation.style.display = "none";
    }, 5000);
    count -= 20;
  }
  if(currentQuestionIndex===quiz.length){
    const userName = prompt(`You Got ${count} points. please enter your name`)
  }
  currentQuestion++;
  renderQuestion();
}

document.querySelector("#start-button").addEventListener("click", startQuiz);

document
  .querySelector("#question-cont")
  .addEventListener("click", handleQuestionClick);
