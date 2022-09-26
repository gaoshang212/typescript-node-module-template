import test from 'tape';
import { testfunc } from "../";

test('testfunc test', function (t: test.Test) {
    t.plan(1);

    t.equal(testfunc(1, 2), 3);
});