/* Objects for testing */

let cities = {Edinburgh: 'wrong', London: 'right' , Cardiff: 'wrong' , Belfast: 'wrong'}
/*let cities = ['Edinburgh', 'London', 'Belfast', 'Cardiff'];*/

/*total score*/
let totalScore = 0;
let questionNumber = 0;

/*Function to print name*/
function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let printName = document.getElementById("print-name");
    printName.innerHTML = `Hi ${name.value}, Welcome to the game!`;
}

function right() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is correct!"
        document.getElementById('score');
        ++totalScore;
        score.innerHTML = `Your score is ${totalScore}`;
}

function wrong() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is wrong ;("

}

/*Function to check answer*/
function checkAnswer(event) {
    event.preventDefault();
    let printAnswer = document.getElementById("print-answer");
    if (document.getElementById('correct').checked) {
        printAnswer.innerHTML = "the answer is correct!"
        document.getElementById('score');
        ++totalScore;
        score.innerHTML = `Your score is ${totalScore}`;
    } else {
        printAnswer.innerHTML = "the answer is wrong ;("
    }
}

/*Function to print the question*/
function displayQuestion(event) {
    let displayMyQuestion = document.getElementById('quiz-area');
    /*adds one to the question number*/
    ++questionNumber;
    /*displays question to screen*/
    displayMyQuestion.innerHTML = `<form id="question"><h3>Question ${questionNumber}</h3><p>What is the capital of the UK?</p><form method="POST" name="question" class="question"><input type="radio" id="option-two" name="question"><label for="option-one">Belfast</label><input type="radio" id="option-two" name="question"><label for="option-two" >Cardiff</label><input type="radio" id="correct" name="question"><label for="correct">London</label><input type="radio" id="option-four" name="question"><label for="option-four">Edinburgh</label><input type="submit" value="Submit answer"></form></form>`
    /*event listener to submit question*/
    let currentQuestion = document.getElementById('question');
    currentQuestion.addEventListener('submit', checkAnswer);
}

/*Alternate Function to check answer*/
function checkAnswerTwo(event) {
    console.log("Success!");
    let printAnswer = document.getElementById("print-answer");
    if (document.getElementById('right').click) {
        printAnswer.innerHTML = "the answer is correct!"
        document.getElementById('score');
        ++totalScore;
        score.innerHTML = `Your score is ${totalScore}`;
    } else {
        printAnswer.innerHTML = "the answer is wrong ;("
    }

}

/*Function to iterate through question objects*/
function printQuestion(event) {
    let printMyQuestion = document.getElementById('second-quiz-area');
    let questionList = document.createElement('div');
    for (city in cities) {
        let questionChoice = document.createElement('div');
        questionChoice.innerHTML = `<button id = "${cities[city]}" onclick = "${cities[city]}()">${city}</button>`;
        questionList.appendChild(questionChoice);
    }
    printMyQuestion.appendChild(questionList);
}

/*Event Listener to print name*/
let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

/*Event Listener to ask question
let askMeAQuestion = document.getElementById('ask-me-a-question');
askMeAQuestion.addEventListener('click', displayQuestion);*/

/*Event Listener to ask question - 2*/
let askMeAQuestion = document.getElementById('ask-me-another-question');
askMeAQuestion.addEventListener('click', printQuestion);

/*event listener to submit question
let currentQuestion = document.getElementById('question');
currentQuestion.addEventListener('submit', checkAnswer);*/

/*event listener to submit question
let currentQuestion = document.getElementById('second-quiz-area');
currentQuestion.addEventListener('click', checkAnswerTwo);*/