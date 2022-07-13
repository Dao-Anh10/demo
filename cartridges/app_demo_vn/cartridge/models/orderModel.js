'use strict';

let shippingMgr = require('dw/order/ShippingMgr');

let getAllShippingMethods = function () {
    let allShippingMethods = shippingMgr.getAllShippingMethods(); 
    return allShippingMethods;
}

module.exports = {
    getAllShippingMethods : getAllShippingMethods
}