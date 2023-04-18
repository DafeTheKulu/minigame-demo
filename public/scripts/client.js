// Connect client to the websocket server (same host as default)
const socket = io(); 


// USERNAME INPUT

// Initialize variable objects for dom elements
const nameInput = document.querySelector('#nameInput'); //username input
const buttonName = document.querySelector('#buttonName'); //

// Event listener to submit username to server.
buttonName.addEventListener('click', () => {
    const name = nameInput.value;
    socket.emit('setUsername', name); // emit a socket.io event 'setUsername' with the name data
});


// GAME INTERFACE //

// Initialize variable objects for dom elements
let guessInput = document.querySelector(".guessInput");
let outputText = document.querySelector('.output');
let buttonGuess = document.querySelector(".buttonGuess");
let buttonRestart = document.querySelector(".buttonRestart");
let prevGuess = document.querySelector(".prevGuess");

// Game button event listeners
buttonGuess.addEventListener("click", () => {
    const guessNumber = guessInput.value;
    prevGuess.textContent = prevGuess.textContent + ' ' + guessNumber;
    socket.emit('guess', guessNumber); // emit a socket.io event with the guessNumber to the server for checking
});

buttonRestart.addEventListener("click", () => {
    parent.location = '/';
});


// SOCKETIO CLIENT RECEIVE FROM SERVER //

// When play message is recieved swap div display
socket.on("play", () => {
    document.querySelector('#name-input-container').classList.toggle('d-block');
    document.querySelector('#name-input-container').classList.toggle('d-none');
    document.querySelector('#game-interface-container').classList.toggle('d-none');
});

socket.on("correct", () => {
    outputText.textContent = "You win";
});

socket.on("incorrect", (message) => {
    outputText.textContent = message;
});


