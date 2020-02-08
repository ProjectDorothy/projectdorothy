const request = require('request');

module.exports = {
    make_API_call : function(url,rbody){
        return new Promise((resolve, reject) => {
            request(
                {method: 'POST',
                    url: url,
                    headers: {'Content-Type' :'application/json'},
                    body: rbody},
                (err, res, body) => {
                    if (err) reject(err)
                    resolve(body)
                });

        })
    },
    make_API_put : function (url, put_body) {
        return new Promise((resolve, reject) => {
            request(
                {method: 'PUT',
                    url: url,
                    headers: {'Content-Type' :'application/json'},
                    body: put_body,
                    json: true
                },
                (err, res, body) => {
                    if (err) {return console.error(err)}
                    resolve(body)
                }
            )
        })

    },
    make_simple : function (url) {
        return new Promise((resolve, reject) => {
            request(
                {method: 'GET',
                    url: url,
                    headers: {'Content-Type' :'application/json'}
                },
                (err,res,body) => {
                    if (err) {return console.log(err)}
                    resolve(body)
                }
            )
        })
    }
}
