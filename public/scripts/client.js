// Connect client to the websocket server (same host as default)
const socket = io();

//
//      USERNAME INPUT INTERFACE
//
/////////////////////////////////////////

// Initialize variable objects for dom elements
const nameInput = document.querySelector("#nameInput"); //username input
const buttonName = document.querySelector("#buttonName"); //
const nameForm = document.querySelector("#name-form");
const playerNameOutput = document.querySelector("#game-interface-container h2");

/* ----------Step 5: Add an event listener to submit username to server. ---------------------*/

//////////////////////////////////////////////////////////

//
//      GAME INTERFACE
//
/////////////////////////////////////////

// Initialize variable objects for dom elements
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector(".guessInput");
const outputText = document.querySelector(".output");
const buttonGuess = document.querySelector(".buttonGuess");
const prevGuess = document.querySelector(".prevGuess");

/* Step 6a: Add an Event Listener to the game submit button */
guessForm.addEventListener("submit", (e) => {
	// Guess button listener
	// prevent default behaviour
	e.preventDefault();
	//set guessNumber to the value of the text input
	const guessNumber = guessInput.value;
	// clear text input
	guessInput.value = "";
	// output guesses
	prevGuess.textContent = prevGuess.textContent + " " + guessNumber;

	// GUESS - a socket.io event with the guessNumber to the server for checking
	/* -------- Step 6b: Use emit() to send the guess to the server ------------ */
});

//Restart button to direct user back to homepage
buttonRestart.addEventListener("click", () => {
	// ternary to check if buttonRestart exists in the dom
	parent.location = "/"; //send user to / route
}); // if it doesn't exist dont add the eventListener

////////////////////////////////////////////////////////////////////////

//
//      SOCKETIO MESSAGES FROM SERVER
//
/////////////////////////////////////////////////////

// PLAY - When play message is recieved swap div display
socket.on("play", () => {
	document.querySelector("#name-input-container").classList.toggle("d-block");
	document.querySelector("#name-input-container").classList.toggle("d-none");
	document
		.querySelector("#game-interface-container")
		.classList.toggle("d-none");
});

/* -------------Step 7a: Output a success message when the correct answer is received */
// CORRECT - When correct message is recieved output message

/* -------------Step 7b: Output a try again message when an incorrect answer is received */
// INCORRECT - When incorrect message is received output message
