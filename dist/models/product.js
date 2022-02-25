"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const client_1 = __importDefault(require("../utils/client"));
class productModel {
    async index() {
        const query = "select name,price,category from products";
        const conn = await client_1.default.connect();
        const result = await conn.query(query);
        conn.release();
        return result.rows;
    }
    async show(id) {
        try {
            const query = "select name,price,category from products where id = ($1)";
            const conn = await client_1.default.connect();
            const result = await conn.query(query, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            return null;
        }
    }
    async create(p) {
        try {
            const query = "insert into products(name, price, category) values($1,$2,$3)";
            const conn = await client_1.default.connect();
            await conn.query(query, [p.name, p.price, p.category]);
            conn.release();
            return 1;
        }
        catch (err) {
            return 0;
        }
    }
    async showCategory(id) {
        const query = "select name,price,category from products where category = ($1)";
        const conn = await client_1.default.connect();
        const result = await conn.query(query, [id]);
        conn.release();
        return result.rows;
    }
}
exports.productModel = productModel;
