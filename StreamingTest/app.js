var fs = require('fs');
var port = process.env.port || 1337;
var express = require('express');
var app = express();

var path = __dirname + "/public";
app.use(express.static(path));
app.listen(port);

app.get('/index/:text', function (request, response) {
    console.log(response.params.text);
    response.end();
});


