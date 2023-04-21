// Modules
const express = require("express"); //Add express to project
const app = express(); // Create new express app object
const http = require("http"); // Add HTTP server/client
const path = require("path"); // Add path

//
//      SOCKET IO & GAME SETUP
//
/////////////////////////////////////////

/* -------- STEP 1: Setup the server--------*/

// Create http server/client attached to app object

// Require Server from socket.io

// Create new socket.io server and call it io

// Object to store individual player details on server-side

//////////////////////////////////////////

//
//     EXPRESS APP SETUP
//
//////////////////////////////////////////

// Require controllers
const index = require("./controllers/index");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Express app setup
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Initalize routes
app.use("/", index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

server.listen(3000, () => {
	console.log("Game ServerIO Active!");
});
/////////////////////////////////////////////////////////////

//
//   SOCKETIO FUNCTIONS
//
////////////////////////////////////////////

// CONNECTION - When connection message received grab player socket information
// This allows the application to communicate with specific sockets/users/devices
io.on("connection", (socket) => {
	// Initialize variables to store id of current player socket client
	const playerId = socket.id;

	// Server player connected message
	console.log("Socket Connected: " + playerId);

	/* -------- STEP 2a: Prepare the socket to respond when it receives a username -----------*/
	// SETUSERNAME -  When 'setUsername' message received, generate random number, and store it to variable for specific user,
	// emit 'play' message to that socket only
	if (!players[playerId]) {
		// generate random number 1 - 10
		let randomNumber = Math.floor(Math.random() * 10) + 1;
		players[playerId] = {
			username: username,
			randomNumber: randomNumber,
		};
		/* -------------Step 2b: Assign a random number to the new user -------------*/

		/*--------Step 2c: Set username and their puzzle random number to object*/

		/* ------Step 2d: Emit play message to specific socket/user */
	}
});

// GUESS - When 'guess' message received compare guessNumber to randomNumber and emit proper message
socket.on("guess", (guessNumber) => {
	const player = players[playerId]; // set current player details to get player's randomNumber
	const randomNumber = player.randomNumber; // set to current socket/player random number to compare

	/* ----------- Step 3: Compare player's guessNumber to player's randomNumber using emit() ---------*/
});

/* --------Step 4: Check if players disconnect and respond accordingly --------------------- */
// DISCONNECT - When 'disconnect' message received check if user made username and remote socket/player from object

//Export
module.exports = app;
