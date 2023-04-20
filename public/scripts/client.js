// Connect client to the websocket server (same host as default)
const socket = io(); 


//
//      USERNAME INPUT INTERFACE
//
/////////////////////////////////////////



// Initialize variable objects for dom elements
const nameInput = document.querySelector('#nameInput'); //username input
const buttonName = document.querySelector('#buttonName'); //
const nameForm = document.querySelector('#name-form');
const playerNameOutput = document.querySelector("#game-interface-container h2");


// Event listener to submit username to server.
nameForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent default submit refresh form is submitted using JS
    const name = nameInput.value; // set name to text input value
    playerNameOutput.textContent = name; // set the player name display to the name value
    // SETUSERNAME -  a socket.io event 'setUsername' with the name data
    socket.emit('setUsername', name); 
});



//////////////////////////////////////////////////////////





//
//      GAME INTERFACE
//
/////////////////////////////////////////


// Initialize variable objects for dom elements
const guessForm = document.querySelector("#guess-form")
const guessInput = document.querySelector(".guessInput");
const outputText = document.querySelector('.output');
const buttonGuess = document.querySelector(".buttonGuess");
const prevGuess = document.querySelector(".prevGuess");


// Game button event listeners
guessForm.addEventListener("submit", (e) => {  // Guess button listener
    e.preventDefault(); // prevent default
    const guessNumber = guessInput.value; //set guessNumber to the value of the text input
    guessInput.value = ''; // clear text input
    prevGuess.textContent = prevGuess.textContent + ' ' + guessNumber; // output guesses
    
    // GUESS - a socket.io event with the guessNumber to the server for checking
    socket.emit('guess', guessNumber); 
});

//Restart button to direct user back to homepage
buttonRestart.addEventListener("click", () => {  // ternary to check if buttonRestart exists in the dom 
    parent.location = '/'; //send user to / route
}); // if it doesn't exist dont add the eventListener


////////////////////////////////////////////////////////////////////////






//
//      SOCKETIO MESSAGES FROM SERVER
//
/////////////////////////////////////////////////////


// PLAY - When play message is recieved swap div display
socket.on("play", () => {
    document.querySelector('#name-input-container').classList.toggle('d-block');
    document.querySelector('#name-input-container').classList.toggle('d-none');
    document.querySelector('#game-interface-container').classList.toggle('d-none');
});

// CORRECT - When correct message is recieved output message
socket.on("correct", () => {
    outputText.textContent = "You win! Click Restart";
});


// INCORRECT - When incorrect message is received output message
socket.on("incorrect", (message) => {
    outputText.textContent = message;
});