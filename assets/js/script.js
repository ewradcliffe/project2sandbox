let totalScore = 0;

function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let printName = document.getElementById("print-name");
    printName.innerHTML = `Hi ${name.value}, Welcome to the game!`;
}

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


let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

let currentQuestion = document.getElementById('question');
currentQuestion.addEventListener('submit', checkAnswer);