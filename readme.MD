## Server-Side Demo Socket.IO Game
Number guessing game incorporating SocketIO to generate random number, and check if guess is correct, server-side.

Live : https://minigame-kuqt.onrender.com/

### [server.js]

## Step 2b:
```
if (!players[playerId]) {
      // generate random number 1 - 10
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	players[playerId] = {
		username: username,
		randomNumber: randomNumber,
	};
```
## Step 2c:
```
console.log(
	"New player added " +
	username +
	" : " +
	playerId +
	" : " +
	randomNumber
);
```
## Step 2d:
```
socket.emit("play"); 
```
---------------------------------
## Step 3:
```
if (guessNumber == randomNumber) {
	socket.emit("correct"); // emit correct message
} else if (guessNumber > randomNumber) {
	socket.emit("incorrect", "Too high!"); // emit incorrect message with string
} else if (guessNumber < randomNumber) {
	socket.emit("incorrect", "Too low!"); // emit incorrect message with string
} else {
	socket.emit("incorrect"); // emit incorrect message
}
```
---------------------------
## Step 4:
```
socket.on("disconnect", () => {
	if (players[playerId]) {
		// Socket connected but did user create a username?
		const playerName = players[playerId].username;
		console.log(
			"User Disconnected: " + " " + playerName + " : " + playerId
		);
		delete players[playerId];
	} else {
		console.log("User Disconnected: " + playerId);
	}
	});
});
```
---------------------
### [client.js]

## Step 5:
```
nameForm.addEventListener("submit", (e) => {
	//prevent default submit refresh form is submitted using JS
	e.preventDefault();
	// set name to text input value
	const name = nameInput.value;
	// set the player name display to the name value
	playerNameOutput.textContent = name;
	// SETUSERNAME -  a socket.io event 'setUsername' with the name data
	socket.emit("setUsername", name);
});
```

--------------
## Step 6a:
```
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
});
```
## Step 6b:
```
socket.emit("guess", guessNumber);
```

-------------------
## Step 7a:
```
socket.on("correct", () => {
	outputText.textContent = "You win! Click Restart";
});
```

## Step 7b:
```
socket.on("incorrect", (message) => {
	outputText.textContent = message;
});
```
