function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    let printName = document.getElementById("print-name");
    printName.innerHTML = `Hi ${name.value}, Welcome to the game!`;
}

function checkAnswer(event) {
    event.preventDefault();
    if(document.getElementById('option-three').checked) {   
        let answer = document.getElementsByClassName('answer').value;  
        let printAnswer = document.getElementById("print-answer");
        printAnswer.innerHTML = "the answer is correct!"   
    }  else {
        let printAnswer = document.getElementById("print-answer");
        printAnswer.innerHTML = "the answer is wrong ;(" 
    }
}    


let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

let currentQuestion = document.getElementById('question');
currentQuestion.addEventListener('submit', checkAnswer);