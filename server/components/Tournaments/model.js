'use strict';

import Rx from 'rx';
import {List} from 'immutable';
import tournamentIntents from './intents';

let modelState$ = Rx.ReplaySubject(1);

let tournament = List.of();

function subscribeToTournamentIntents() {
    tournamentIntents.subscribe(event => {

    });
}

export default {
    modelState$: modelState$
};