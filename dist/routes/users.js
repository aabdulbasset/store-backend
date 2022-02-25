"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../handlers/users");
const checkid_1 = require("../middlewares/checkid");
const authorization_1 = require("../middlewares/authorization");
const router = (0, express_1.Router)();
//Setting routes
router.get('/', authorization_1.validateUserToken, users_1.index);
router.get('/id/:id', checkid_1.checkID, authorization_1.validateUserToken, users_1.show);
router.post('/create', authorization_1.validateAdminToken, users_1.create);
exports.default = router;
