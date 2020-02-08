const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //only use for local, already loaded on web

const url = 'https://hitmeservermate.firebaseio.com/';

function change_fb(req_type) {
    const xhttp = new XMLHttpRequest();

    xhttp.open(req_type,url+ '/moves.json',true);
    xhttp.onload = function () {
        let orders = JSON.parse(this.responseText);
        console.log(orders)
    };
    xhttp.send();

}

function inflict_dmg()

change_fb('GET');
