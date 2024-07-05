const questions = [
    {
        question: "Which type of JavaScript language is",
        answers: [
            { text: "Object-Oriented", correct: "false" },
            { text: "Object-Based", correct: "true" },
            { text: "Assembly-language", correct: "false" },
            { text: "High-level", correct: "false" },

        ]
    }
    ,
    {
        question: " The function and  var are known as:",
        answers: [
            { text: "Keywords", correct: "false" },
            { text: "Declaration statements", correct: "true" },
            { text: "Prototypes", correct: "false" },
            { text: "Keywords", correct: "false" },

        ]
    }
    ,
    {
        question: " Which of the following variables takes precedence over the others if the names are the same?",
        answers: [
            { text: "Global variable", correct: "false" },
            { text: "The local element", correct: "true" },
            { text: "The two of the above", correct: "false" },
            { text: "None of the above", correct: "false" },

        ]
    }
    ,
    {
        question: " How do you properly comment on a single line in JavaScript?",
        answers: [
            { text: " # This is a comment", correct: "false" },
            { text: "// This is a comment. ", correct: "true" },
            { text: "/* This is a comment. */ ", correct: "false" },
            { text: " <!-- This is a comment. --> ", correct: "false" },

        ]
    }
    ,
    {
        question: "Which loop is guaranteed to execute the block of code at least once?",
        answers: [
            { text: "for loop", correct: "false" },
            { text: "do...while loop ", correct: "true" },
            { text: "while loop ", correct: "false" },
            { text: "none", correct: "false" },

        ]
    }
    ,
    {
        question: "Which loop is ideal when you want to iterate over an array in JavaScript?",
        answers: [
            { text: "repeat...until loop ", correct: "false" },
            { text: "for loop ", correct: "true" },
            { text: "while loop ", correct: "false" },
            { text: "none", correct: "false" },

        ]
    }
    ,
    {
        question: "Which operator is used to combine two or more strings in JavaScript?",
        answers: [
            { text: " && ", correct: "false" },
            { text: "+", correct: "true" },
            { text: "  || ", correct: "false" },
            { text: "-", correct: "false" },

        ]
    }
    ,
    {
        question: "Which comparison operator checks for both value and type equality in JavaScript? ",
        answers: [
            { text: " == ", correct: "false" },
            { text: "=", correct: "false" },
            { text: "===", correct: "true" },
            { text: "<=", correct: "false" },

        ]
    }
    ,
    {
        question: "How do you create an empty array in JavaScript? ",
        answers: [
            { text: "let arr = new Array();", correct: "false" },
            { text: "let arr = {}; ", correct: "false" },
            { text: "let arr = []; ", correct: "true" },
            { text: "let arr = null; ", correct: "false" },

        ]
    },
    {
        question: "What is the index of the first element in an array? ",
        answers: [
            { text: "1", correct: "false" },
            { text: "-1", correct: "false" },
            { text: "0", correct: "true" },
            { text: "10", correct: "false" },

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
     resetState();

    // it display question with question number

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    //  it display the answer in the button  

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML = "Play Again !";
    nextButton.style.display = "block" ;
}
  
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();


