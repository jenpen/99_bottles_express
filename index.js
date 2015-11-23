var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
  res.send("99 bottles of beer on the wall. <a href='/98'>Take one down pass it around</a>")
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

app.listen(3000, function(){
  console.log("app listening on port 3000");
});
