'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let cfenv = require('cfenv');

//create express instance
let oApp = express();

//Cloud Foundry environent variables
let oAppEnv = cfenv.getAppEnv();

//body parser middleware to handle URL parameters and JSON bodies
oApp.use(bodyParser.urlencoded({extended: false}));
oApp.use(bodyParser.json());

//connect to mongodb
require('mongo-connect.js')(oAppEnv);

oApp.listen(oAppEnv.port, function(){
  console.log('Server listening at ' + oAppEnv.url);
});
