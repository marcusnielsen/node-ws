'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var express = require('express');
var app = express();

function init() {
    app.listen(process.env.PORT, function () {
        console.log('Server created on port: ' + process.env.PORT);
    });
}

exports['default'] = {
    init: init
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map