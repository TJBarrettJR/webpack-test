var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
