const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../ruyi/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../ruyi/build', 'index.html'));
});
app.get('/student', function(req, res) {
  res.sendFile(path.join(__dirname, '../ruyi/build', 'student.html'));
});
app.get('/studio', function(req, res) {
  res.sendFile(path.join(__dirname, '../ruyi/build', 'studio.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../ruyi/build', 'about.html'));
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../ruyi/build', 'index.html'));
});

app.listen(9000);
