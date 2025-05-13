"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
const CrudController_1 = require("./generics/CrudController");
class ExampleController extends CrudController_1.CrudController {
    constructor(service) {
        super(service);
        this.healthcheck = (req, res) => {
            res.send("hello world");
        };
    }
}
exports.ExampleController = ExampleController;
