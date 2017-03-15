var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res)
{
    fs.readFile(__dirname + '/' + "user.json", 'utf8', function(err, data)
    {
        console.log(data);
        res.end(data);
    });
});

var user = 
{
    "user4" : 
    {
    "name" : "feng4",
    "passwd" : "passwd4",
    "profession" : "student4",
    "id" : 4
    }
}

app.get('/addUser', function(req, res)
{
    fs.readFile(__dirname + '/' + "user.json", 'utf8', function(err, data)
    {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8000, function()
{
    console.log('running...');
});