"use strict";
exports.__esModule = true;
var express_1 = require("express");
var users_js_1 = require("./users/users.js");
var port = 8000;
var app = (0, express_1["default"])();
app.use(function (req, res, next) {
    console.log('Время ', Date.now());
    next();
});
app.get('/hello', function (req, res) {
    throw new Error('Error!!!');
});
app.use('/users', users_js_1.userRouter);
app.use(function (err, req, res, next) {
    console.log(err.message);
    res.status(401).send(err.message);
});
app.listen(port, function () {
    console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 http://localhost:".concat(port));
});
