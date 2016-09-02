var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(app.get("port"), function() {
  process.on('uncaughtException', function (err) {
    console.log(err);
  });
  console.log("Express server listening on port %d in %s mode", app.get("port"), app.settings.env)
});
