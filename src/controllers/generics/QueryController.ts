import { Request, Response, NextFunction } from "express";
import { QueryService } from "../../services/generics/QueryService";
import { BaseModel } from "../../models/BaseModel";

export abstract class QueryController<T extends BaseModel> {
  constructor(protected service: QueryService<T>) { }

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await this.service.list(req.query as Partial<T>);
      res.json(items);
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await this.service.getById(req.params.id);
      res.json(item);
    } catch (err) {
      next(err);
    }
  };
}
