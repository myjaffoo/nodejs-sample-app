'use strict';

const express = require('express');

// Constants
const PORT = 8081;

// App
const app = express();
app.get('/hello_world/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
