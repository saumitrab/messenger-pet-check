'use strict';

var pino = require('pino')();
var express = require('express');

var app = express();

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'mazha_message') {
    pino.info("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    pino.info("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

app.listen(80, function () {
    pino.info('Example app listening on port 80!')
});
