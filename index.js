var express = require("express");
var app = express();
var fs = require('fs');
var socket = require('socket.io');

// to append logger.txt initally
var stream = fs.createWriteStream("logger.txt");
[...Array(10)].forEach(function () {
  stream.write("welcome to simulation" + "\n");
});
stream.end();


// reading logger.txt  
fs.watchFile("logger.txt", function () {
  fs.readFile('logger.txt', function (err, read) {
    if (err) {
      throw err;
    } else {
      console.log("read", read.toString())
    }
  })
});

//  static file
app.use(express.static('client'));


var server = app.listen(8080, () => console.log("server started on port 8080"));


// socket setup
var io = socket(server);


io.on('connection', function (socket) {
  console.log("made socket connection", socket.id)
});