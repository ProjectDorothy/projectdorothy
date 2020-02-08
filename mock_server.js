const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next()
};

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.put('/put', (req,res) => {
    res.send('put req successful')
});

app.listen(3000);