"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ debug: true, path: path_1.default.resolve(`${__dirname}/../../.env`) });
let client = new pg_1.Pool();
if (process.env.ENV === 'dev') {
    client = new pg_1.Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DB,
        password: process.env.PASSWORD
    });
}
if (process.env.ENV === 'test') {
    client = new pg_1.Pool({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DB_TEST,
        password: process.env.PASSWORD
    });
}
exports.default = client;
