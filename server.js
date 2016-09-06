var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// Connect MONGOD db
mongoose.connect(process.env.DB || 'mongodb://localhost/lastresort_app');

process.on('exit', function() { mongoose.disconnect() }); // Shutdown Mongoose correctly

var routes = require('./config/routes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

// DUMMY DATA
// var users;
// var users = [
//   { _id: 1, username: "Mike", password: "asdf", image_url: "", email: "mike@gmail.com"},
//   { _id: 2, username: "Ben", password: "password", image_url: "", email: "ben@gmail.com"}
// ];

app.use(routes);

//Splash Page
app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html");
});


//Users Index Page
app.get('/users', function (req,res) {
  res.json({ users:users });
});

//Create User
app.post('/users', function(req,res) {
  var newUser = req.body;
  if (users.length > 0) {
    newUser._id = users[users.length - 1] + 1;
  }
  else {
    newUser._i = 1;
  }
  users.push(newUser);
  res.json(newUser);
});

// Show User
app.get('/users/:id', function(req,res){
  var userId = parseInt(req.params.id);
  var showUser = users.filter(function(user){
    return user._id == userId;
  })[0];
  res.json(showUser);
});

// Update User
app.put('/users/:id/', function update(req,res){
  var userId = parseInt(req.params.id);
  var updateUser = users.filter(function(user){
    return user._id == userId;
  })[0];
  updateUser.username = req.body.username;
  updateUser.password = req.body.password;
  updateUser.image_url = req.body.image_url;
  updateUser.email = req.body.email;
});



// RUN LOCAL SERVER

app.listen(app.get("port"), function() {
  process.on('uncaughtException', function (err) {
    console.log(err);
  });
  console.log("Express server listening on port %d in %s mode", app.get("port"), app.settings.env)
});
