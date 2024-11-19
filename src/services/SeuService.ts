import { Db } from "mongodb";

export class SeuService {
  constructor(private db: Db) { }

  healthcheck(): string {
    return "hello world"
  }
}