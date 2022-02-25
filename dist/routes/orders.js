"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_1 = require("../handlers/orders");
const authorization_1 = require("../middlewares/authorization");
const checkid_1 = require("../middlewares/checkid");
const router = express_1.default.Router();
router.get('/:id/current', [authorization_1.validateAdminToken, checkid_1.checkID], orders_1.current);
router.get('/:id/complete', [authorization_1.validateAdminToken, checkid_1.checkID], orders_1.completed);
exports.default = router;
