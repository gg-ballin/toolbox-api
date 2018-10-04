
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 


 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
app.get('/home', function(req, res) {
  var filter = req.query.filter;
  res.send(filter);
});
 
//Ejemplo: POST http://localhost:8080/items
app.post('/items', function(req, res) {
   var data = req.body.data;
   res.send('Add ' + data);
});
 
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});