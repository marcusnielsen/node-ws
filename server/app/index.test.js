'use strict';

import test from 'tape';
import appInit from '../app';
import WebSocket from 'ws';

let app;

test('setup', (t) => {
    process.env.PORT = 6000;

    appInit.init(function (initializedApp) {
        app = initializedApp;
        t.end();
    });
});

test('app', (t) => {
    t.plan(3);

    const ws = new WebSocket('ws://localhost:' + process.env.PORT);

    ws.addEventListener('open', function() {
        ws.send('something');
        t.pass('Websocket connection opened.');
    });

    ws.addEventListener('message', function(message) {
        t.pass('Websocket message recieved.');
        ws.close();
    });

    ws.addEventListener('close', () => {
        t.pass('Websocket closed.');
    });
});

test('teardown', (t) => {
    app.close();
    t.end();
});
