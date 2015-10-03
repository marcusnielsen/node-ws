'use strict';

import test from 'tape';
import app from '../app';

test('app', (t) => {
    app.init();
    t.end();
});