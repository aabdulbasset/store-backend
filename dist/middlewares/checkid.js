"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkID = void 0;
const checkID = async (req, res, next) => {
    const id = Number(req.params.id);
    if (isNaN(id) || id == 0) {
        res.sendStatus(400);
    }
    else {
        next();
    }
};
exports.checkID = checkID;
