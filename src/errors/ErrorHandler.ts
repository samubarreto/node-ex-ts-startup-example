import { Request, Response, NextFunction } from "express";
import { HttpError } from "./HttpError";

export function errorHandler() {
  return (err: any, req: Request, res: Response, _next: NextFunction) => {
    console.error(`[Erro] ${req.method} ${req.url}`, err);

    if (err instanceof HttpError) {
      res.status(err.statusCode).json({ erro: err.message });
    } else {
      res.status(500).json({ erro: "Erro interno no servidor" });
    }
  };
}
