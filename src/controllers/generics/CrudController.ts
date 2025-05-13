import { Request, Response, NextFunction } from "express";
import { CrudService } from "../../services/generics/CrudService";
import { QueryController } from "./QueryController";
import { BaseModel } from "../../models/BaseModel";

export abstract class CrudController<T extends BaseModel> extends QueryController<T> {
  constructor(protected crudService: CrudService<T>) {
    super(crudService);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await this.crudService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.crudService.update(req.params.id, req.body);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.crudService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}
