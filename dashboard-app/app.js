const express = require('express');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') const port = 5000;
else const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);