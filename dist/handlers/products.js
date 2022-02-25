"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showCategory = exports.create = exports.show = exports.index = void 0;
const product_1 = require("../models/product");
const productObj = new product_1.productModel;
const index = async (req, res) => {
    res.send(await productObj.index());
};
exports.index = index;
const show = async (req, res) => {
    res.send(await productObj.show(Number(req.params.id)));
};
exports.show = show;
const create = async (req, res) => {
    const p = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };
    if (!req.body.name || !req.body.price || !req.body.category || await productObj.create(p) == 0) {
        res.sendStatus(400);
    }
    else {
        res.sendStatus(200);
    }
};
exports.create = create;
const showCategory = async (req, res) => {
    res.send(await productObj.showCategory(Number(req.params.id)));
};
exports.showCategory = showCategory;
