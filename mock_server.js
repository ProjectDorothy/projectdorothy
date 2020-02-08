// const express = require('express');
// const api_helper = require('./API_helper');
// const server = express();
//
// const port = 3001;
//
// server.use(express.json());
// server.use((req, res, next) => {
//     next();
// });
//
//
//
// module.exports = server;

const express = require('express');
const app = express();

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next()
}

app.use(myLogger);

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000);