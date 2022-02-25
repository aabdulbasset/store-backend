"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const client_1 = __importDefault(require("../utils/client"));
class OrderModel {
    async Current(user_id) {
        const conn = await client_1.default.connect();
        const query = 'select id from orders where user_id = ($1) and status=false;';
        const order_result = await conn.query(query, [user_id]);
        const ordersList = await Promise.all(order_result.rows.map(async (order) => {
            const query = 'select product_id,quantity from orders_products where order_id = ($1)';
            const product_result = await conn.query(query, [order.id]);
            const Order = {
                user_id: user_id,
                order_id: order.id,
                status: false,
                products: product_result.rows
            };
            return Order;
        }));
        return ordersList;
    }
    async Complete(user_id) {
        const conn = await client_1.default.connect();
        const query = 'select id from orders where user_id = ($1) and status=true;';
        const order_result = await conn.query(query, [user_id]);
        const ordersList = await Promise.all(order_result.rows.map(async (order) => {
            const query = 'select product_id,quantity from orders_products where order_id = ($1)';
            const product_result = await conn.query(query, [order.id]);
            const Order = {
                user_id: user_id,
                order_id: order.id,
                status: true,
                products: product_result.rows
            };
            return Order;
        }));
        return ordersList;
    }
}
exports.OrderModel = OrderModel;
