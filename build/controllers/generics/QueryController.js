"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryController = void 0;
class QueryController {
    constructor(service) {
        this.service = service;
        this.list = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.service.list(req.query);
                res.json(items);
            }
            catch (err) {
                next(err);
            }
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.service.getById(req.params.id);
                res.json(item);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.QueryController = QueryController;
