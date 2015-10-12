'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _appCommonReplicate = require('app/common/replicate');

var _appCommonReplicate2 = _interopRequireDefault(_appCommonReplicate);

var intent$ = Rx.Subject(1);

function create(user) {
    intent$.onNext({
        event: 'create',
        data: user
    });
}

function remove() {
    intent$.onNext({
        event: 'remove',
        data: tournament
    });
}

function update() {
    intent$.onNext({
        event: 'update',
        data: tournament
    });
}

exports['default'] = {
    intent$: intent$,
    create: create,
    remove: remove,
    update: update
};
module.exports = exports['default'];
//# sourceMappingURL=intents.js.map