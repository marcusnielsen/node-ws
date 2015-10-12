'use strict';

import Rx from 'rx';
import {List} from 'immutable';
import replicate from 'app/common/replicate';

let intentCreateUser$ = new Rx.subject();
let intentRemoveUser$ = new Rx.subject();
let intentUpdateUser$ = new Rx.subject();

export function observe(usersIntent) {
    replicate(usersIntent.createUser$, intentCreateUser$);
    replicate(usersIntent.removeUser$, intentRemoveUser$);
    replicate(usersIntent.updateUser$, intentUpdateUser$);
}

