"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const client_1 = __importDefault(require("../utils/client"));
class userModel {
    async index() {
        const query = 'select firstName,lastName from users';
        const conn = await client_1.default.connect();
        const result = await conn.query(query);
        conn.release();
        return result.rows;
    }
    async show(id) {
        const query = 'select firstName,lastName from users where id = ($1)';
        const conn = await client_1.default.connect();
        const result = await conn.query(query, [id]);
        conn.release();
        return result.rows[0];
    }
    async create(u) {
        try {
            const query = 'insert into users(firstName, lastName, password) values($1,$2,$3)';
            const conn = await client_1.default.connect();
            await conn.query(query, [u.firstName, u.lastName, u.password]);
            conn.release();
            return 1;
        }
        catch (err) {
            return 0;
        }
    }
}
exports.userModel = userModel;
