var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom');

// Connect MONGOD db
mongoose.connect(process.env.DB || 'mongodb://localhost/lastresort_app');

process.on('exit', function() { mongoose.disconnect() }); // Shutdown Mongoose correctly

app.use('/', express.static(path.join(__dirname, 'public')));

var routes = require('./config/routes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(routes);

// Splash Page
app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html");
});


// RUN LOCAL SERVER

app.listen(app.get("port"), function() {
  process.on('uncaughtException', function (err) {
    console.log(err);
  });
  console.log("Express server listening on port %d in %s mode", app.get("port"), app.settings.env)
});
