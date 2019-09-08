var express = require("express");
var app = express();
var fs = require('fs');

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

app.get("/", function (req, res) {
  console.log("data")
  res.send("done")
})

app.listen(8080, () => console.log("server started on port 8080"))