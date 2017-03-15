//http://127.0.0.1:8000/images/Chrysanthemum.jpg
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res)
{
    res.send('Hello');
});

var server = app.listen(8000, function()
{
    console.log('running...')
})