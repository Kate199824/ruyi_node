const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/student', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'student.html'));
});
app.get('/studio', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'studio.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'about.html'));
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
