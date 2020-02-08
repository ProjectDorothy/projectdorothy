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


function inflict_dmg(dmg_taken, player) {
    const xhttp = new XMLHttpRequest();

    const url2 = 'https://hitmeservermate.firebaseio.com/' + '/players/' + player + '.json';
    xhttp.open("GET",url2,true);
    xhttp.onload = function () {
        let health = JSON.parse(this.responseText).health;
        health = health - dmg_taken;
        console.log(health);

    };
    xhttp.send();

}

// change_fb('GET');
// inflict_dmg(15,"A");
patch_fb(1, 2);
