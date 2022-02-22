"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var products_1 = require("../handlers/products");
var authorization_1 = require("../middlewares/authorization");
var checkid_1 = require("../middlewares/checkid");
var router = express_1["default"].Router();
router.get('/', products_1.index);
router.get('/id/:id', checkid_1.checkID, products_1.show);
router.post('/create', authorization_1.validateAdminToken, products_1.create);
router.get('/category/:id', checkid_1.checkID, products_1.showCategory);
exports["default"] = router;
