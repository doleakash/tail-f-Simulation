var express = require("express");
var app = express();
var fs = require('fs');

fs.readFile('logger.txt', function (err, read) {
  if (err) {
    throw err;
  } else {
    console.log("read", read.toString())

  }
})

app.get("/", function (req, res) {
  console.log("data")
  res.send("done")
})

app.listen(8080, () => console.log("server started on port 8080"))