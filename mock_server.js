const express = require('express');
const app = express();

//make mock json file for testing
const fs = require('fs');
// let rawdata = fs.readFileSync('mock_json.json');
// let student = JSON.parse(rawdata);

var port = process.env.PORT || 8080;

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next()
};
app.set('view engine', 'ejs');
app.use(myLogger);

app.get('/', function (req, res) {
    // res.send('Hello World!')
    res.render('index');
});

// app.put('/put', (req,res) => {
//     res.send(student)
// });

app.get('/playerA', function (req, res) {
    res.send('Only bad boys do bad commits')
});

app.get('/playerB', function (req, res) {
    res.send('Player B is a bad boy tho')
});

app.listen(port);