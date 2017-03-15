var express = require('express');
var app = express();
var bodyparse = require('body-parser');

var urlencodeParser = bodyparse.urlencoded({extended : false});
app.use(express.static('public'));

app.get('/index2.html', function(req, res)
{
    res.sendFile(__dirname + '/' + 'index2.html');
});

app.post('/process_post', urlencodeParser, function(req, res)
{
    response = 
    {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
    };

    console.log(response);

    res.end(JSON.stringify(response));
});

var server = app.listen(8000, function()
{
    console.log('running...');
});