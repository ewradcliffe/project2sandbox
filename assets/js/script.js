function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name');
    console.log(name);
    let printName = document.getElementById("print-name");
    printName.innerHTML = `Hi ${name.value}, Welcome to the game!`;
}

let yourName = document.getElementById("your-name");
yourName.addEventListener('submit', printName);

