


function handleSubmit(event) {
    // Prevent the default submit action)
    event.preventDefault();

    // Get the input elements
    let name = document.getElementById('name-input')

    // Log their values to the console
    console.log('name', name.value);
}

// This gets the form and attaches an event listener to it
let form = document.getElementById('name-input');
form.addEventListener('submit', handleSubmit);


/*Basic game function */
function game(answer) {
    event.preventDefault();
    if (answer === 'true') {
        console.log("Correct");
    } else {
        console.log("wrong");
    }
}

let answer = document.getElementsByClassName('answer');
console.log(answer);


// This gets the form and attaches an event listener to it
let questionAnswer = document.getElementById('question');
console.log(questionAnswer);
questionAnswer.addEventListener('submit', game);
