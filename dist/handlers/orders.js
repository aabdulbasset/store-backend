"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completed = exports.current = void 0;
const order_1 = require("../models/order");
let OrderObject = new order_1.OrderModel;
const current = async (req, res) => {
    const id = Number(req.params.id);
    res.send(await OrderObject.Current(id));
};
exports.current = current;
const completed = async (req, res) => {
    const id = Number(req.params.id);
    res.send(await OrderObject.Complete(id));
};
exports.completed = completed;
