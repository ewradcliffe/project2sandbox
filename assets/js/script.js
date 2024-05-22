/*total score*/
let totalScore = 0;

/*Function to print name*/
function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let printName = document.getElementById("print-name");
    printName.innerHTML = `Hi ${name.value}, Welcome to the game!`;
}

/*Event Listener to print the question*/
function printQuestion(event) {
    let printMyQuestion = document.getElementById('quiz-area');
    printMyQuestion.innerHTML = 'This finally worked!!'
}


/*Function to check answer*/
function checkAnswer(event) {
    event.preventDefault();
    let printAnswer = document.getElementById("print-answer");
    if(document.getElementById('correct').checked) {   
        printAnswer.innerHTML = "the answer is correct!" 
        document.getElementById('score');
        ++totalScore;
        score.innerHTML = `Your score is ${totalScore}`;  
    }  else {
        printAnswer.innerHTML = "the answer is wrong ;(" 
    }
}    

/*Event Listener to print name*/
let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

/*Event Listener to ask question*/
let askMeAQuestion = document.getElementById('ask-me-a question');
askMeAQuestion.addEventListener('click', printQuestion);

/*event listener to submit question*/
let currentQuestion = document.getElementById('question');
currentQuestion.addEventListener('submit', checkAnswer);