import { Router } from "express";
import { Db } from "mongodb";
import { SeuService } from "./services/SeuService";
import { SeuController } from "./controllers/SeuController";

export function createRoutes(db: Db) {
  const router = Router();

  const seuService = new SeuService(db);
  const seuController = new SeuController(seuService);
  router.get('/', seuController.healthcheck);

  return router;
}