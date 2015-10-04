'use strict';

const Rx = require('rx');
import React from 'react';

React.render(
    (<div>
        Client Hello!
    </div>),
    document.querySelector('[data-app]'));

import WebSocket from 'ws';
const ws = new WebSocket('ws://localhost:3000');
ws.addEventListener('open', function() {
    ws.send('something');
});
ws.addEventListener('message', function(message) {
    console.dir(JSON.parse(message.data));
});