
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/:id', function(req, res, next) {
  var itemId = req.params.id;
  res.status(200).send(req.params.id.toUpperCase());
});
 

app.post('/', function(req, res) {
   var data = req.body.data;
   res.send('Add ' + data);
});
 
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});