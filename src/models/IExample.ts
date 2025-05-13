import { HttpError } from "../errors/HttpError";
import { BaseModel } from "./BaseModel";

export interface IExample extends BaseModel {
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  role?: 'admin' | 'user' | 'moderator';
  avatarUrl?: string;
}

export const validateUserData = (data: { email: string; name: string }) => {
  if (!data.email)
    throw new HttpError(400, "Email é obrigatório.");

  if (!data.name || data.name.length < 8)
    throw new HttpError(400, "Name é obrigatório e deve ter ao menos 8 caractéres.");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(data.email))
    throw new HttpError(400, "Formato de email inválido.");
};