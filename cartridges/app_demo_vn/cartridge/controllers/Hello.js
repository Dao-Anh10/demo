'use strict';

/**
 * @namespace Home
 */

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 * @function
 * @memberof Home
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
//   consentTracking.consent, cache.applyDefaultCache,
server.get('Show', function (req, res, next) {
    let serviceIphone = require('*/cartridge/scripts/services/iphoneService');
    let customObjectMgr = require('dw/object/CustomObjectMgr');
    var txn = require('dw/system/Transaction');
    txn.begin();

    let newCustomObject = customObjectMgr.createCustomObject('obj_iphone', '122');
    txn.commit();

    // serviceIphone.setURL(serviceIphone.getURL() + '/');
    // let result = serviceIphone.call();
    // let data = [];
    // if (result.status === 'OK') {
    //     data = JSON.parse(result.object);
    // }
    res.render('home/hello', {
        test: newCustomObject
    });


    next();
});

module.exports = server.exports();
