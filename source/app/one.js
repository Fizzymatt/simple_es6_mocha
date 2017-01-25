// jshint esversion: 6
import ClassTwo from './two.js';
import ClassThree from './three.js';

export default class One {
    constructor(c2=ClassTwo, c3=ClassThree) {
        this._c2 = new c2();
        this._c3 = c3;
    }

    run_multiplyBySeven() {
        return this._c2.multiplyBySeven(2);
    }

    run_getEight() {
        return this._c3.getEight();
    }
}
