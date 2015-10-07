'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var intent$ = Rx.Subject(1);

function create(tournament) {
    intent$.onNext({
        event: 'create',
        data: tournament
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