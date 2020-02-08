const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //only use for local, already loaded on web

const xhttp = new XMLHttpRequest();
const xhttp2 = new XMLHttpRequest();


const url = "http://localhost:3000";

xhttp.open("GET",url+'playerA',true);
xhttp.onload = function () {
    console.log('get req got got!')
};
xhttp.send();
