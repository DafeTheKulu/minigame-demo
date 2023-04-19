// Modules 
const express = require('express');  //Add express to project
const app = express(); // Create new express app object
const http = require('http'); // Add HTTP server/client
const path = require("path"); // Add path 



//
//      SOCKET IO & GAME SETUP
//
/////////////////////////////////////////

// Create http server/client attached to app object
const server = http.createServer(app); 

// Require Server from socket.io  
const { Server } = require("socket.io"); 

// Create new socket.io server and call it io
const io = new Server(server); 

// Object to store individual player details on server-side
let players = {}; 

//////////////////////////////////////////



<<<<<<< HEAD

=======
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
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

<<<<<<< HEAD

=======
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
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
  console.log('Game ServerIO Active!')
})
/////////////////////////////////////////////////////////////



<<<<<<< HEAD

//
//   SOCKET IO FUNCTIONS
=======
//
//   SOCKETIO FUNCTIONS
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
//
////////////////////////////////////////////

io.on("connection", (socket) => {

  // Initialize variables to store id of player socket client
  const playerId = socket.id;

  // Server player connected message 
  console.log('Socket Connected: ' + playerId); 

<<<<<<< HEAD
  // When setUsername message received emit 'play' message and store random number to playerId index of players
=======

  


  // setusername -  When 'setUsername' message received emit 'play' message and store random number to playerId index of players
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
  socket.on('setUsername', (username) => {
    if (!players[playerId]) {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      players[playerId] = { username: username, randomNumber: randomNumber };
      socket.emit('play');
<<<<<<< HEAD
      console.log('New player added ' + username + ':' + playerId + ':' + randomNumber);
    }
  });

   // When guess message received compare guessNumber to randomNumber and emit proper message
   socket.on('guess', (guessNumber) => {
=======
      console.log('New player added ' + username + ' : ' + playerId + ' : ' + randomNumber);
    }
  });




  // guess - When 'guess' message received compare guessNumber to randomNumber and emit proper message
  socket.on('guess', (guessNumber) => {
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
    const player = players[playerId];
    const randomNumber = player.randomNumber;

    if (guessNumber == randomNumber) {
      socket.emit('correct');
    } else if (guessNumber > randomNumber) {
      socket.emit('incorrect', 'Too high!')
    } else if (guessNumber < randomNumber) {
      socket.emit('incorrect', 'Too low!')
    } else {
      socket.emit('incorrect');
    }
  });

<<<<<<< HEAD
  socket.on("disconnect", () => {
    console.log('User Disconnected: ' + playerId);
    delete players[playerId];
=======



  // disconnect - When 'disconnect' message received check if user is active and delete player
  socket.on("disconnect", () => {
    if (players[playerId]) { // Socket connected but did user create a username? 
      const playerName = players[playerId].username;
      console.log('User Disconnected: ' + ' ' + playerName + ' : ' + playerId);
      delete players[playerId];
    } else {
      console.log('User Disconnected: ' + playerId);
    }

>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
  });

});


<<<<<<< HEAD

=======
>>>>>>> bb9a7ddc1ef3d62286bb5943355c484f6923ba8a
module.exports = app;
