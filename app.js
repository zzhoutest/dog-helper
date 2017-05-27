var express = require('express');
var logger = require("./logger.js");
var config = require("./config.json");
var tag = 'rcsbot';

var app = express();

app.get(config.webhook, function (req, res) {
  res.send("Hello RCS!");
  logger.i(tag, req.body);
});

app.listen(config.port, function () {
  console.log('RCS chatbot is listening on port ' + config.port);
});