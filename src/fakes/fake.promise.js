'use strict';

class Promise {
    constructor() {
        this._resolved = false;
        this._value = null;
        this._thens = [];
        this._catches = [];
    }

    then(cb) {
        if(this._resolved) {
            this._value = cb(this._value);
        } else {
            this._thens.push(cb);
        }
        return this;
    }

    catch(cb) {
        this._catches.push(cb);
        return this;
    }

    resolve(value) {
        this._resolved = true;
        this._value = value;
        this._thens.forEach((cb) => {
            this._value = cb(this._value);
    });
    }

    reject(value) {
        this._catches.forEach((cb) => {
            value = cb(value);
    });
    }
}

export default Promise;
