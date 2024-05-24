/* Objects for testing */

let cities = {Edinburgh: 'wrong', London: 'right' , Cardiff: 'wrong' , Belfast: 'wrong'}

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

/*Function triggered by onlclick-"right"*/
function right() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is correct!"
        document.getElementById('score');
        ++totalScore;
        score.innerHTML = `Your score is ${totalScore}`;
}

/*Function triggered by onlclick-"wrong"*/
function wrong() {
    let printAnswer = document.getElementById("print-answer");
    printAnswer.innerHTML = "the answer is wrong ;("

}

/*Function to iterate through question objects and print to screen*/
function printQuestion(event) {
    let printMyQuestion = document.getElementById('quiz-area');
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

/*Event Listener to ask question*/
let askMeAQuestion = document.getElementById('ask-me-a-question');
askMeAQuestion.addEventListener('click', printQuestion);
