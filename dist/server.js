"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var products_1 = __importDefault(require("./routes/products"));
var users_1 = __importDefault(require("./routes/users"));
var orders_1 = __importDefault(require("./routes/orders"));
// import orders from './routes/orders'
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
//Use routes
app.use('/products', products_1["default"]);
app.use('/users', users_1["default"]);
app.use('/orders', orders_1["default"]);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
