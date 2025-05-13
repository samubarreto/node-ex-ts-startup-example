import { Router } from "express";
import { Db } from "mongodb";
import { ExampleService } from "./services/ExampleService";
import { ExampleController } from "./controllers/ExampleController";

export function createRoutes(db: Db) {
  const router = Router();

  const exampleService = new ExampleService(db, "example_db");
  const exampleController = new ExampleController(exampleService);

  router.get('/', exampleController.healthcheck);
  router.get('/examples', exampleController.list);
  router.get('/examples/:id', exampleController.getById);
  router.post('/examples', exampleController.create);
  router.put('/examples/:id', exampleController.update);
  router.delete('/examples/:id', exampleController.delete);

  return router;
}
