import { Request, Response } from 'express';
import { SeuService } from '../services/SeuService';

export class SeuController {
  constructor(private seuService: SeuService) { } // crie uma interface ISeuService

  healthcheck = (req: Request, res: Response) => {
    const result = this.seuService.healthcheck();
    return res.status(200).json({ message: result });
  };
}