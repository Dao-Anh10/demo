'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

module.exports = LocalServiceRegistry.createService('ip_services', {
    createRequest: function (svc) {
        svc.setRequestMethod('GET');
    },
    parseResponse: function (svc, client) {
        return client.text;
    },
    mockCall: function (svc) {
        return {
            statusCode: 200,
            statusMessage: 'Success',
            text: 'MOCK RESPONSE (' + svc.URL + ')'
        };
    },
    filterLogMessage: function (msg) {
        return msg.replace('headers', 'OFFWITHTHEHEADERS');
    }
});