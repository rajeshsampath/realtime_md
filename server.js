const express = require('express');
const sharejs = require('share');
const redis = require('redis');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// wiring the public asset pipeline
app.use(express.static(__dirname + '/public'));

// defining the routes

app.get('/', function(req, res) {
    res.render('pad');
})

app.get('/(:id)', function(req, res) {
    res.render('pad');
});

const options = {
    db: {type: 'redis'},
}

sharejs.server.attach(app, options);

// assign the port to the server
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Server listening on port'+ port);
});
 