var db = require("../models");
var bCrypt = require('bcrypt-nodejs');
var passport   = require('passport');

module.exports = function(app){

    app.post("/login", passport.authenticate('local',{
      successRedirect: '/main',
      failureRedirect: '/'
      })
    );
    
    app.post("/newlogin",function(req,res){
        db.user_Info.findAll({
            where: {
             userName: req.body.newUserName
            }
          }).then(function(user){
              console.log(user);
            if( user.length === 0 ){
                console.log("im Here!!!");
                db.user_Info.create({
                userName: req.body.newUserName,
                password: bCrypt.hashSync(req.body.newUserPass)
              }).then(function(user){
                  console.log(user+ "this is the second one");
                passport.authenticate("local", {failureRedirect:"/", successRedirect: "/mainPage"})(req, res, next)
                
              });
            } else {
              res.send("user exists");
            }
          })
        console.log(req.body);
    });
}