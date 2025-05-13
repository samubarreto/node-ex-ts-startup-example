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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const mongodb_1 = require("mongodb");
const HttpError_1 = require("../../errors/HttpError");
const QueryService_1 = require("./QueryService");
class CrudService extends QueryService_1.QueryService {
    constructor(db, collectionName) {
        super(db, collectionName);
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const _a = data, { _id } = _a, dataWithoutId = __rest(_a, ["_id"]);
            const result = yield this.collection.insertOne(Object.assign({}, dataWithoutId));
            if (!result.insertedId) {
                throw new HttpError_1.HttpError(500, "Falha ao inserir documento.");
            }
            return Object.assign(Object.assign({}, data), { _id: result.insertedId });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: data });
            if (result.matchedCount === 0) {
                throw new HttpError_1.HttpError(404, "Item para atualizar não encontrado.");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
            if (result.deletedCount === 0) {
                throw new HttpError_1.HttpError(404, "Item para deletar não encontrado.");
            }
        });
    }
}
exports.CrudService = CrudService;
