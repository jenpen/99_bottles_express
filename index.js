var express = require("express");
var app = express();
app.set("view engine", "hbs");

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.redirect('/99');
});

app.get("/:number_of_bottles", function (req, res) {
  var bottles = req.params.number_of_bottles || 99;
  var pass = bottles - 1;
  if (bottles < 1) {
    res.send("There are no more beers.<br><a href='/'>Restart");
  } else {
    res.send(req.params.number_of_bottles + " bottles of beer on the wall. <br><a href='/" + pass + "'>Take one down and pass it around.");
  };
});
