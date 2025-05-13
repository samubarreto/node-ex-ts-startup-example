"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const HttpError_1 = require("./HttpError");
function errorHandler() {
    return (err, req, res, _next) => {
        console.error(`[Erro] ${req.method} ${req.url}`, err);
        if (err instanceof HttpError_1.HttpError) {
            res.status(err.statusCode).json({ erro: err.message });
        }
        else {
            res.status(500).json({ erro: "Erro interno no servidor" });
        }
    };
}
