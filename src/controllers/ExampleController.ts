import { CrudController } from "./generics/CrudController";
import { IExample } from "../models/IExample";
import { ExampleService } from "../services/ExampleService";
import { Request, Response } from "express";

export class ExampleController extends CrudController<IExample> {
  constructor(service: ExampleService) {
    super(service);
  }

  healthcheck = (req: Request, res: Response) => {
    res.send("hello world");
  };
}
