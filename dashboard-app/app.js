const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

let port;
if (process.env.NODE_ENV === 'production') port = 5000;
else port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);