const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //only use for local, already loaded on web

const xhttp = new XMLHttpRequest();
const xhttp2 = new XMLHttpRequest();


const url = "http://localhost:3000";

/*xhttp.open("GET",url,true);
xhttp.onload = function () {
    console.log('get req got got!')
};
xhttp.send();*/


xhttp2.open("PUT",url+'/put',true);
xhttp2.onload = function () {
    console.log('put req works')

    let stuff = JSON.parse(this.responseText);
    console.log(stuff)
};
xhttp2.send();
