'use strict';

import q from 'q';

export class Ajax {
    create(params) {
        return httpRequest({...params, method: "POST"});
    }

    read(params) {
        return httpRequest({...params, method: "GET", data: undefined});
    }

    update(params) {
        return httpRequest({...params, method: "PUT"});
    }

    delete(params) {
        return httpRequest({...params, method: "DELETE", data: undefined});
    }
}

function httpRequest(params) {
    return q.promise(function (resolve, reject, notify) {
        var request = new XMLHttpRequest();

        request.open(params.method, params.url, true);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/json');

        if(params.xauth) {
            request.setRequestHeader('x-auth', params.xauth);
        }

        request.onload = onload;
        request.onerror = onerror;
        request.onprogress = onprogress;
        request.send(JSON.stringify(params.data));

        function onload() {
            if (request.status === 200) {
                resolve(JSON.parse(request.response));
            } else {
                reject(new Error("Status code was " + request.status));
            }
        }

        function onerror() {
            reject(new Error("Can't XHR " + JSON.stringify(params.url)));
        }

        function onprogress(event) {
            notify(event.loaded / event.total);
        }
    })
}

export function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}