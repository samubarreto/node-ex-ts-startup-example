"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const HttpError_1 = require("../errors/HttpError");
const validateUserData = (data) => {
    if (!data.email)
        throw new HttpError_1.HttpError(400, "Email é obrigatório.");
    if (!data.name || data.name.length < 8)
        throw new HttpError_1.HttpError(400, "Name é obrigatório e deve ter ao menos 8 caractéres.");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(data.email))
        throw new HttpError_1.HttpError(400, "Formato de email inválido.");
};
exports.validateUserData = validateUserData;
