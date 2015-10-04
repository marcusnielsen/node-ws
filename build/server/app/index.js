'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var WebSocketServer = require('ws').Server;
var http = require('http');
var express = require('express');
var app = express();
var morgan = require('morgan');

function init(done) {
    app.use(morgan('dev'));
    app.use('/client', express['static'](__dirname + '/../../client'));

    var server = http.createServer(app);
    server.listen(process.env.PORT);

    var wss = new WebSocketServer({ server: server });
    wss.on('connection', function (ws) {
        var id = setInterval(function () {
            ws.send(JSON.stringify(process.memoryUsage()), function () {/* ignore errors */});
        }, 100);
        console.log('started client interval');
        ws.on('close', function () {
            console.log('stopping client interval');
            clearInterval(id);
        });
    });

    done(server);
}

exports['default'] = {
    init: init
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map