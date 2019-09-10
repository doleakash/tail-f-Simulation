var express = require("express");
var app = express();
var fs = require('fs');
var socket = require('socket.io');
var readLastLines = require('read-last-lines');


// reading logger.txt  
fs.watchFile("logger.txt", function () {
  readLastLines.read('logger.txt', 10)
    .then((lines) => {
      io.emit('read', lines)
    })
});


// static file
app.use(express.static('client'));
var server = app.listen(8080, () => console.log("server started on port 8080"));


// socket setup
var io = socket(server);
io.on('connection', function (socket) {
  var stream = fs.createWriteStream("logger.txt");
  [...Array(100)].forEach(function () {
    stream.write("welcome to simulation" + "\n");
  });
  stream.end();
});



