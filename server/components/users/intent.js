'use strict';

import replicate from 'app/common/replicate';

let inputCreateUser$ = new Rx.Subject();
let inputRemoveUser$ = new Rx.Subject();
let inputUpdateUser$ = new Rx.Subject();

export function observe(usersView) {
    replicate(usersView.createUser$, inputCreateUser$);
    replicate(usersView.removeUser$, inputRemoveUser$);
    replicate(usersView.updateUser$, inputUpdateUser$);
}
/*
export let createUser$ = inputCreateUser$.map((userData) => {
    return {
        id: userData.name,
        name: userData.name
    };
});

export let removeUser$ = inputRemoveUser$.map((userId) => {
    return userId;
});

export let updateUser$ = inputUpdateUser$.map((userData) => {
    return {
        id: userData.id,
        name: userData.name
    };
});
*/
