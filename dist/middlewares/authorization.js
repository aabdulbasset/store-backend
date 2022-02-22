"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.validateUserToken = exports.validateAdminToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validateAdminToken = function (req, res, next) {
    var _a;
    if (!req.headers.authorization) {
        res.sendStatus(401);
    }
    else {
        var parsedToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jsonwebtoken_1["default"].verify(parsedToken, process.env.SECRET_FOR_TOKEN) != "admin") {
            res.sendStatus(403);
        }
        else {
            next();
        }
    }
};
exports.validateAdminToken = validateAdminToken;
var validateUserToken = function (req, res, next) {
    var _a;
    if (!req.headers.authorization) {
        res.sendStatus(401);
    }
    else {
        var parsedToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (jsonwebtoken_1["default"].verify(parsedToken, process.env.SECRET_FOR_TOKEN)) {
            next();
        }
        else {
            res.sendStatus(401);
        }
    }
};
exports.validateUserToken = validateUserToken;
