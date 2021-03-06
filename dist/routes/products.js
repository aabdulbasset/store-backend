"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("../handlers/products");
const authorization_1 = require("../middlewares/authorization");
const checkid_1 = require("../middlewares/checkid");
const router = express_1.default.Router();
router.get('/', products_1.index);
router.get('/id/:id', checkid_1.checkID, products_1.show);
router.post('/create', authorization_1.validateAdminToken, products_1.create);
router.get('/category/:id', checkid_1.checkID, products_1.showCategory);
exports.default = router;
