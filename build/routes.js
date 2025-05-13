"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = createRoutes;
const express_1 = require("express");
const ExampleService_1 = require("./services/ExampleService");
const ExampleController_1 = require("./controllers/ExampleController");
function createRoutes(db) {
    const router = (0, express_1.Router)();
    const exampleService = new ExampleService_1.ExampleService(db, "example_db");
    const exampleController = new ExampleController_1.ExampleController(exampleService);
    router.get('/', exampleController.healthcheck);
    router.get('/examples', exampleController.list);
    router.get('/examples/:id', exampleController.getById);
    router.post('/examples', exampleController.create);
    router.put('/examples/:id', exampleController.update);
    router.delete('/examples/:id', exampleController.delete);
    return router;
}
