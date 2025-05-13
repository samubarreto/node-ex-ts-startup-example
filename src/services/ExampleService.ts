import { Db } from "mongodb";
import { IExample } from "../models/IExample";
import { CrudService } from "./generics/CrudService";

export class ExampleService extends CrudService<IExample> {
  super(db: Db) { }

  healthcheck(): string {
    return "hello world"
  }
}