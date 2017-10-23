var path = require("path");
var passport = require('passport')



module.exports = function(app){  
  var IsAuthenticated = function(req, res, next){
    console.log(req);
    if(req.isAuthenticated()){
      next();
    } else {
      next(new Error(401));
    }
  }
    
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/main", IsAuthenticated,function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

}