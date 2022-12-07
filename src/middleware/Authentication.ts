import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

const SECRET_KEY: Secret = "13ffdafe-5daa-11eb-ae93-0242ac130002";

export interface CustomRequest extends Request{
    token: string | JwtPayload;
}

export const Authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token){
            throw new AppError("Token não encontrado");
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        throw new AppError("Token expirado ou inválido");
    }
}