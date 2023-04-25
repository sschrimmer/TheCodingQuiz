const questionCont = document.querySelector("#question-cont")
let currentQuestion = 0
const answerValidation= document.getElementById("validation")
const countTime=document.getElementById("count")
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
let count = 90
function startQuiz(){
    let timer=setInterval(()=>{
        count--;
        countTime.textContent=count
    },1000)
    document.querySelector("#welcomeScreen").style.display="none"
renderQuestion()

}

function renderQuestion(){
    questionCont.innerHTML=""
    let questionEl=document.createElement("h3")
    questionEl.textContent=quiz[currentQuestion].question
    questionCont.append(questionEl)
    for (i=0; i<quiz[currentQuestion].choices.length;i++){
        let choiceButton = document.createElement("button")
        choiceButton.textContent = quiz[currentQuestion].choices[i]
        choiceButton.style.display = "block"
        questionCont.append(choiceButton)
    }
}

function handleQuestionClick(event){
 let selectedChoice= event.target.textContent
if (selectedChoice ===quiz[currentQuestion].answer){
    answerValidation.style.display = "block"
    answerValidation.textContent = "Correct!!!"
    setTimeout(()=>{
        answerValidation.style.display="none"
    },5000)
} else{
   answerValidation.style.display="block"
    console.log("wrong")
    answerValidation.textContent = "Wrong!!!"
    setTimeout(()=>{
        answerValidation.style.display="none"
    },5000)
}
currentQuestion++
renderQuestion()
}


// function showQuiz() {
//     let output = "";
//     for (let i=0; i < quiz.length; i++) {
//         output += "<p>" + quiz[i].question + "</p>";
//         for (let j = 0; j < quiz[i].choices.length; j++) {
//             output += '<input type=" radio" name="question"' + i + '"value="' + quiz[i].choices[j] + '">';
//             output += '<label for="question"' + i + '">' + quiz[i].choices[j] + '</label><br>';

//         }
//     }
// }
// quizContainer.innerHTML = output;

// function showResults()
// const answerContainers = quizContainer.querySelectorAll("input[name='question0']");
// let numCorrect= 0;
// for (let i = 0; i <answerContainers.length; i++) {
//     if(answerContainers[i].value === quiz[0].answer && answerContainers[i].checked) {
//         numCorrect++;
//     }
// }
// const score
document.querySelector("#start-button").addEventListener("click", startQuiz)

document.querySelector("#question-cont").addEventListener("click", handleQuestionClick)