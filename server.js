// Modules 
const createError = require("http-errors"); // Add HTTP-errors
const express = require('express');  //Add express to project
const app = express(); // Create new express app object
const http = require('http'); // Add HTTP server/client
const path = require("path"); // Add path 




//
//      SOCKET IO & GAME SETUP
//
/////////////////////////////////////////

// Object to store individual player details on server-side
let players = {}; 

// Require Server from socket.io  
const { Server } = require("socket.io"); 

// Create http server/client attached to app object
const server = http.createServer(app); 

// Create new socket.io server and call it io
const io = new Server(server); 

// Tell Express to use io object 
app.set('socket.io', io);

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

server.listen(8000, () => {
  console.log('Server 8000 Active!')
})
/////////////////////////////////////////////////////////////




//
//   SOCKET IO FUNCTIONS
//
////////////////////////////////////////////

io.on("connection", (player) => {

  // Initialize variable to store id of player socket client
  const playerId = player.id;

  // Server player connected message 
  console.log('Player Connected: ' + playerId); 

  // When setUsername message received emit 'play' message and store random number to playerId index of players
  player.on('setUsername', (username) => {
    if (!players[playerId]) {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      players[playerId] = { username, randomNumber };
      io.emit('play');
      console.log('New player added ' + username + ':' + playerId + ':' + randomNumber);
    }
  });

   // When guess message received compare guessNumber to randomNumber and emit proper message
   player.on('guess', (guessNumber) => {
    const player = players[playerId];
    const randomNumber = player.randomNumber;

    if (guessNumber == randomNumber) {
      io.emit('correct');
    } else if (guessNumber > randomNumber) {
      io.emit('incorrect', 'Too high!')
    } else if (guessNumber < randomNumber) {
      io.emit('incorrect', 'Too low!')
    } else {
      io.emit('incorrect');
    }
  });

  player.on("disconnect", () => {
    console.log('User Disconnected: ' + playerId);
    delete players[playerId];
  });

});



module.exports = app;
