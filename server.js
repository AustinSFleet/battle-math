var express         = require("express"); //
var bodyParser      = require("body-parser");
var passport        = require('passport');
var session         = require('express-session');
var path            = require("path");
var bCrypt          = require('bcrypt-nodejs');
var app             = express();
var LocalStrategy   = require('passport-local').Strategy;
var db              = require("./models");
var PORT            = process.env.PORT || 8080;
var cookieParser    = require('cookie-parser');
//use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//use bodyParser



//initialize passport
app.use(session({ secret: 'keyboardCat',resave: true, saveUninitialized:true})); // session secret
app.use(require('cookie-parser')());
app.use(passport.initialize());
app.use(passport.session())
//initialize passport

app.use(cookieParser('keyboardCat'));



//This is for local Authentication
passport.use(new LocalStrategy(
    function(username, password, cb){
    // var hashedPass = bCrypt.hashSync(pass)
   
   
    if(username == password){
      return  cb(null, {userInfo : username, userInfo: password});
    }
    else {
        return cb(new Error(401));
    }
  }
));
//This is for local Authentication

//This is to serialize User and deserialize user  
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function(user, cb) {
   cb(null, user);
    });
//This is to serialize User and deserialize user
 
  

//initialize passport
app.use(express.static("public"));


//getting Api & HTML routes
require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);
//getting Api & HTML routes



db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });

}); 
    
