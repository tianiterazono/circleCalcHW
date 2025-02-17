
const express = require("express");
const bodyParser = require("body-parser");

// create an app objndoe ect from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

  var radius = parseFloat(req.body.n1);
  var height = parseFloat(req.body.n2);

// does the computation of the input variables, as numbers
    var volCylinder = Math.PI * (radius * radius) * height;
   

// sends the results back to the web page as string
  res.send("The Volume of the Cylinder is " + volCylinder.toFixed(2));
})
//this gets the response from the web page to this placeholder
// COMMENT out this code in Repl, as this is not running on localhost:3000

app.listen(3000, function() {
console.log ("Server is running on port 3000")
});
