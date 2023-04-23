const quiz = [
    {question: "What does HTML stand for?",
    choices: ["Cascading Style Sheets", "Graphic User Interface", "Creative Style Sheets", "HyperText Markup Language"],
    answer: "HyperText Markup Language"},


{
    
    question: "What does CSS stand for?",
    choices: ["HyperText Markup Language", "Cascading Style Sheets", "A command", "Creative Style Sheets"],
    answer: "Cascading Style Sheets"
},
{
question: "What does JS stand for?",
choices: ["JavaScript", "Just Scrolling", "Creative Style Sheets", "Nothing at all"],
answer: "JavaScript"}
]

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");

function showQuiz() {
    let output = "";
    for (let i=0; i < quiz.length; i++) {
        output += "<p>" + quiz[i].question + "</p>";
        for (let j = 0; j < quiz[i].choices.length; j++) {
            output += '<input type=" radio name="question' + i + '"value="' + quiz[i].choices[j] + '">';
            output += '<label for="question' + i + '">' + quiz[i].choices[j] + '</label><br>';

        }
    }
}
quizContainer.innerHTML = output;

function showResults()
const answerContainers = quizContainer.querySelectorAll("input[name='question0']");
let numCorrect= 0;
for (let i = 0; i <answerContainers.length; i++) {
    if(answerContainers[i].value === quiz[0].answer && answerContainers[i].checked) {
        numCorrect++;
    }
}
const score

