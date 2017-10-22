var express         = require("express");
var bodyParser      = require("body-parser");
var passport        = require('passport');
var session         = require('express-session');
var bCrypt          = require('bcrypt-nodejs');
var path            = require("path");
var app             = express();
var PORT            = process.env.PORT || 3001;
var db              = require("./models/index.js");
var cookieParser    = require('cookie-parser');
var LocalStrategy   = require('passport-local').Strategy;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.resolve(__dirname,"client/build")));

// Static directory
// app.use(express.static("public"));

//initializing Passport
app.use(session({ secret: 'keyboardCat',resave: true, saveUninitialized:true})); // session secret
app.use(require('cookie-parser')());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('keyboardCat'));
//initializing Passport


//This is for local Authentication
passport.use(new LocalStrategy({
  usernameField: 'userName',
  passwordField: 'password',
},
  function(username, password, cb){
    console.log("WOO");
    console.log(username);
    console.log(password);
  // var hashedPass = bCrypt.hashSync(pass)
db.user_Info.findAll({
  where : {userName : username}
}).then(function(data){

  console.log(data);
  var hash;

if (data.length !== 0){
  hash = data[0].dataValues.password;
  if(data[0].dataValues.userName === username && bCrypt.compareSync(password, hash)  ){
   return  cb(null, {userName : username, password: password, "HP":data[0].dataValues.HP, "experience":data[0].dataValues.experiance, "level":data[0].dataValues.level, "image":data[0].dataValues.image, "coins": data[0].dataValues.coins});
    // console.log("it works just fine!!");

  }
}

else if (data.length === 0 || bCrypt.compareSync(password, hash))  {
  return cb(null ,{"error" : "error"});
}

});


}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
 cb(null, user);
  });
//This is to serialize User and deserialize user

//API Routs
var IsAuthenticated = function(req, res, next){
  console.log(req);
  if(req.isAuthenticated()){
    next();
  } else {
    next(new Error(401));
  }
}
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
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
app.post("/api/login", function(req,res){
  console.log(req.body);
});

app.post("/api/login", passport.authenticate("local"),  (req, res) => {
  // console.log("recieved")
  // console.log(res);
  // console.log(req);
  res.send(req.user);
});


app.post("/api/newUser", function(req,res){
db.user_Info.findAll({
  where : {userName : req.body.setUserName}
}).then(function (dataUser){
    if(dataUser.length===0){
      console.log("unique user, create new user");
      db.user_Info.create({
        userName : req.body.setUserName,
        password : bCrypt.hashSync(req.body.setPassword),
        image    : req.body.img

      }).then(function(outData){
        console.log(outData.dataValues);
        const userObject = {
          name: outData.dataValues.userName,
          level: outData.dataValues.level,
          experience: outData.dataValues.experience,
          HP: outData.dataValues.HP,
          coins: outData.dataValues.coins,
          img: outData.dataValues.image
        };
        res.send(userObject);
      });
    }
    else{
      console.log("user Exist");
    }
});


});


  db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
