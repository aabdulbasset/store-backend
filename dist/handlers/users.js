"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.show = exports.index = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userObject = new user_1.userModel;
const index = async (__req, res) => {
    res.send(await userObject.index());
};
exports.index = index;
const show = async (req, res) => {
    res.send(await userObject.show(Number(req.params.id)));
};
exports.show = show;
const create = async (req, res) => {
    let pass = bcrypt_1.default.hashSync(req.body.password + process.env.BCRYPT_PEPPER, Number(process.env.SALT_ROUNDS));
    let u = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        password: pass
    };
    if (await userObject.create(u)) {
        const token = jsonwebtoken_1.default.sign(u.lastName, process.env.SECRET_FOR_TOKEN);
        res.setHeader("Authorization", `Bearer ${token}`);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400);
    }
};
exports.create = create;
