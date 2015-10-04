'use strict';

let WebSocketServer = require('ws').Server;
let http = require('http');
let express = require('express');
let app = express();
let morgan = require('morgan');

function init(done) {
    app.use(morgan('dev'));
    app.use('/client', express.static(__dirname + '/../../client'));

    var server = http.createServer(app);
    server.listen(process.env.PORT);

    var wss = new WebSocketServer({server: server});
    wss.on('connection', function(ws) {
        var id = setInterval(function() {
            ws.send(JSON.stringify(process.memoryUsage()), function() { /* ignore errors */ });
        }, 100);
        console.log('started client interval');
        ws.on('close', function() {
            console.log('stopping client interval');
            clearInterval(id);
        });
    });

    done(server);
}

export default {
    init: init
};