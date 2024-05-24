/* Objects for testing */
let questionOne = ['What is the Capital of the UK?', {Edinburgh: 'wrong', London: 'right' , Cardiff: 'wrong' , Belfast: 'wrong'}];

/*let cities = {Edinburgh: 'wrong', London: 'right' , Cardiff: 'wrong' , Belfast: 'wrong'}*/

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

/*Function triggered by onclick-"right"*/
function right() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is correct!"
    /*score update"*/
    document.getElementById('score');
    ++totalScore;
    score.innerHTML = `Your score is ${totalScore}`;
    /*button update"*/
    let answerUpdate = document.getElementById("print-answer");
    answerUpdate.style.background = "green";
}

/*Function triggered by onlclick-"wrong"*/
function wrong() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is wrong ;(";
    let answerUpdate = document.getElementById("print-answer");
    answerUpdate.style.background = "red";
}

/*Function to ask question*/
function askQuestion(click) {
    let displayQuestion = document.getElementById('quiz-area');
    displayQuestion.innerHTML = `<h2>${questionOne[0]}</h2>`;
    let choiceList = document.createElement('div');
    for (choice in questionOne[1]) {
        let questionChoice = document.createElement('div');
        questionChoice.innerHTML = `<button class = "question-button" onclick = "${questionOne[1][choice]}()">${choice}</button>`;
        choiceList.appendChild(questionChoice);
    }
    displayQuestion.appendChild(choiceList);
}

/*Function to iterate through question objects and print to screen*/
function printQuestion(event) {
    let printMyQuestion = document.getElementById('quiz-area');
    let questionList = document.createElement('div');
    for (city in cities) {
        let questionChoice = document.createElement('div');
        questionChoice.innerHTML = `<button class = "question-button" onclick = "${cities[city]}()">${city}</button>`;
        questionList.appendChild(questionChoice);
    }
    printMyQuestion.appendChild(questionList);
}

/*Event Listener to print name*/
let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

/*Event Listener to ask question*/
let askMeAQuestion = document.getElementById('ask-me-a-question');
askMeAQuestion.addEventListener('click', askQuestion);

/*Event Listener to print question
let askMeAQuestion = document.getElementById('ask-me-a-question');
askMeAQuestion.addEventListener('click', printQuestion);*/
