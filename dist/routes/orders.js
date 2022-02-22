"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var orders_1 = require("../handlers/orders");
var authorization_1 = require("../middlewares/authorization");
var checkid_1 = require("../middlewares/checkid");
var router = express_1["default"].Router();
router.get('/:id/current', [authorization_1.validateAdminToken, checkid_1.checkID], orders_1.current);
router.get('/:id/complete', [authorization_1.validateAdminToken, checkid_1.checkID], orders_1.completed);
exports["default"] = router;
