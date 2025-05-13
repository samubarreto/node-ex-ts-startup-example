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
exports.CrudController = void 0;
const QueryController_1 = require("./QueryController");
class CrudController extends QueryController_1.QueryController {
    constructor(crudService) {
        super(crudService);
        this.crudService = crudService;
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.crudService.create(req.body);
                res.status(201).json(item);
            }
            catch (err) {
                next(err);
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.crudService.update(req.params.id, req.body);
                res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.crudService.delete(req.params.id);
                res.status(204).send();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.CrudController = CrudController;
