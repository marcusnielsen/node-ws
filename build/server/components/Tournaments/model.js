'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _immutable = require('immutable');

var _intents = require('./intents');

var _intents2 = _interopRequireDefault(_intents);

var modelState$ = _rx2['default'].ReplaySubject(1);

var tournament = _immutable.List.of();

function subscribeToTournamentIntents() {
    _intents2['default'].subscribe(function (event) {});
}

exports['default'] = {
    modelState$: modelState$
};
module.exports = exports['default'];
//# sourceMappingURL=model.js.map