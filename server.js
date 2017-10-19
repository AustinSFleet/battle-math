var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");
var app = express();

var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
var db = require("./models/index.js");
app.use(express.static(path.resolve(__dirname,"client/build")));
// Static directory
// app.use(express.static("public"));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });


  db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

  app.post("/api/login", function(req,res){
    console.log(req.body);
  });
