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
exports.QueryService = void 0;
const mongodb_1 = require("mongodb");
const HttpError_1 = require("../../errors/HttpError");
class QueryService {
    constructor(db, collectionName) {
        this.db = db;
        this.collectionName = collectionName;
        this.collection = db.collection(collectionName);
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const result = yield this.collection.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!result) {
                throw new HttpError_1.HttpError(404, "Item não encontrado.");
            }
            return Object.assign(Object.assign({}, result), { _id: (_a = result._id) === null || _a === void 0 ? void 0 : _a.toString() });
        });
    }
    list() {
        return __awaiter(this, arguments, void 0, function* (filter = {}) {
            const results = yield this.collection.find(filter).toArray();
            return results.map(doc => { var _a; return (Object.assign(Object.assign({}, doc), { _id: (_a = doc._id) === null || _a === void 0 ? void 0 : _a.toString() })); });
        });
    }
}
exports.QueryService = QueryService;
