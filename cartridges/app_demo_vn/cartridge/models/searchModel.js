'use strict';

let productMgr = require('dw/catalog/ProductMgr');

let getProductById = function (id) {
    let product = productMgr.getProduct(id);
    return product;

}

module.exports = {
    getProductById : getProductById,
};