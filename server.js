const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/test', function (req, res) {
  return res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }
  console.log(`Server started Listening on ${PORT} ...`);
});