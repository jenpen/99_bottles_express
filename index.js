var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory

app.listen(3000, function(){
  console.log("app listening on port " + this.address().port);
});

app.get("/", function(req,res){
  res.redirect('/99');
});

app.get("/:numberOfBottles?", function( req, res ){
  var bottles = req.params.numberOfBottles || 99;
  var next = bottles - 1;
  if (bottles > 1){
    res.send(bottles + " bottles of beer on the wall <a href='/" + next + "'>Take one down pass it around");
  }
  else{
    res.send("1 bottle of beer on the wall <a href='/'>Start Over</a>");
  }
});
