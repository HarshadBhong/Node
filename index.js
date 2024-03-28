var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hii harshad Bhong');
=======
 res.send('hello world');
>>>>>>> 215ca2e9411bdd77aef44ae3fc159473959b60bd
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
