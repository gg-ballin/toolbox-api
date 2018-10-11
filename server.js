
var express = require("express"); 
var cors = require("cors");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.get('/:id', function(req, res, next) {
  var output = req.params.id;
  console.log('LLEGO ', output)
  res.status(200).send(req.params.id);
});
 

app.post('/', function(req, res) {
   var data = req.body.data;
   res.send('Add ' + data);
});
 
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});