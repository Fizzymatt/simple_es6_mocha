// jshint esversion: 6
import * as chai from 'chai';
const expect = chai.expect;

import ClassOne from '../../../app/one.js';

describe('the "one" class', () => {

    it('has method "run_getEight()"', () => {
        expect(
            new ClassOne().run_getEight()
        ).to.not.equal(undefined);
    });

    it('has method "run_multiplyBySeven()" that returns 14', () => {
        expect(
            new ClassOne().run_multiplyBySeven(2)
        ).to.eql(14);
    });
});
