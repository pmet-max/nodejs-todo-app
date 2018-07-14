var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set the view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// using the controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('Listening on port 3000...');
