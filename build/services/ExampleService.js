"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
const CrudService_1 = require("./generics/CrudService");
class ExampleService extends CrudService_1.CrudService {
    super(db) { }
    healthcheck() {
        return "hello world";
    }
}
exports.ExampleService = ExampleService;
