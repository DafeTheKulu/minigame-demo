const socket = io("http://localhost:8000/");

socket.on("connection");

let buttonRandom = document.querySelector(".buttonRandom");
let output = document.querySelector("label");
let buttonGuess = document.querySelector(".buttonGuess");
let guessInput = document.querySelector(".guessInput");
let randomValue;
let outputText = document.querySelector('.output');
function genrateRandom() {
    let randomNumber = Math.floor(Math.random() * 11);

    randomValue = randomNumber;
    output.innerText = `Random Number: ${randomNumber}`;
    console.log(randomValue);
}

function checkValue() {
    if (guessInput.value == randomValue) {

        outputText.textContent = "You Win!"
    } else if (guessInput.value > randomValue && guessInput.value < 10) {

        outputText.textContent = "Value Too High!"
    } else if (guessInput.value > 10) {

        outputText.textContent = "Not More Than 10!"
    } else if (guessInput.value < randomValue && guessInput.value > 0) {
        outputText.textContent = "Value Too Low!"

    } else if (guessInput.value < 1) {
        outputText.textContent = "Value Must Be Greater Than 0"

    } else if (isNaN(guessInput.value)) {
        outputText.textContent = "Only Numbers Are Allowed"
    }
}

buttonGuess.addEventListener("click", checkValue);

buttonRandom.addEventListener("click", genrateRandom);
