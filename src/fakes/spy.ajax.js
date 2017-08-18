'use strict';

import Promise from './fake.promise';

class AjaxSpy {
    constructor() {
        this._promise = null;
        this._getHasBeenCalled = false;
        this._putHasBeenCalled = false;
    }

    get promise() {
        return this._promise;
    }

    get getHasBeenCalled() {
        return this._getHasBeenCalled;
    }

    get putHasBeenCalled() {
        return this._putHasBeenCalled;
    }

    get putData() {
        return this._putData;
    }

    get path() {
        return this._path;
    }

    get(path) {
        this._path = path;
        this._getHasBeenCalled = true;
        this._promise = new Promise();
        return this.promise;
    }

    put(path, data) {
        this._putHasBeenCalled = true;
        this._path = path;
        this._putData = data;
        this._promise = new Promise();
        return this.promise;
    }
}

export default AjaxSpy;