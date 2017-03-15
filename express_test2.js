var express = require('express');
var app = express();

app.get('/', function(req, res)
{
    console.log('get request');
    res.send('Hello GET');
});

app.post('/', function(req, res)
{
    console.log('post request');
    res.send('Hello POST');
});

app.get('/del_user', function(req, res)
{
    console.log('delete_user request');
    res.send('Hello delete_user');
});

app.get('/list_user', function(req, res)
{
    console.log('list_user request');
    res.send('Hello list_user');
});

app.get('/ab*cd', function(req, res)
{
    console.log('ab*cd request');
    res.send('Hello ab*cd');
});

var server = app.listen(8000, function()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log('address-> http://%s:%s', host, port);
});