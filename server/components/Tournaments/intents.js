'use strict';

let intent$ = Rx.Subject(1);

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

export default {
    intent$: intent$,
    create: create,
    remove: remove,
    update: update
};
