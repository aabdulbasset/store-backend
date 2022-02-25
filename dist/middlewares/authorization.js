"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserToken = exports.validateAdminToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateAdminToken = (req, res, next) => {
    if (!req.headers.authorization) {
        res.sendStatus(401);
    }
    else {
        const parsedToken = req.headers.authorization?.split(" ")[1];
        if (jsonwebtoken_1.default.verify(parsedToken, process.env.SECRET_FOR_TOKEN) != "admin") {
            res.sendStatus(403);
        }
        else {
            next();
        }
    }
};
exports.validateAdminToken = validateAdminToken;
const validateUserToken = (req, res, next) => {
    if (!req.headers.authorization) {
        res.sendStatus(401);
    }
    else {
        const parsedToken = req.headers.authorization?.split(" ")[1];
        if (jsonwebtoken_1.default.verify(parsedToken, process.env.SECRET_FOR_TOKEN)) {
            next();
        }
        else {
            res.sendStatus(401);
        }
    }
};
exports.validateUserToken = validateUserToken;
