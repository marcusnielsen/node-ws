'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var app = undefined;

(0, _tape2['default'])('setup', function (t) {
    process.env.PORT = 6000;

    _app2['default'].init(function (initializedApp) {
        app = initializedApp;
        t.end();
    });
});

(0, _tape2['default'])('app', function (t) {
    t.plan(3);

    var ws = new _ws2['default']('ws://localhost:' + process.env.PORT);

    ws.addEventListener('open', function () {
        ws.send('something');
        t.pass('Websocket connection opened.');
    });

    ws.addEventListener('message', function (message) {
        t.pass('Websocket message recieved.');
        ws.close();
    });

    ws.addEventListener('close', function () {
        t.pass('Websocket closed.');
    });
});

(0, _tape2['default'])('teardown', function (t) {
    app.close();
    t.end();
});
//# sourceMappingURL=index.test.js.map