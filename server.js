var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
var db = require("./models/index.js");
// Static directory
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });