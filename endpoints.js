const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //only use for local, already loaded on web

const xhttp = new XMLHttpRequest();

const url = "http://localhost:3000";


xhttp.open("GET",url,true);
xhttp.onload = function () {
    console.log('get req got got!')
};
// xhttp.onprogress = function () {console.log('change')};
xhttp.send();