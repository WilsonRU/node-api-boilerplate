import { User } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { FindUserDto } from "../Dto/FindUserDto";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

const SECRET_KEY: Secret = "13ffdafe-5daa-11eb-ae93-0242ac130002";

export class GetUser {
    async execute({email, password}: FindUserDto): Promise<any> {
        const user = await prisma.user.findUnique({
            where: {
              email
            },
        });
        if (!user) {
            throw new AppError("Usuário não encontrado.");
        }

        const result = bcrypt.compareSync(password, user.password);
        if (!result) {
            throw new AppError("Senha invalida, Tente Novamente!");
        }
        const token = jwt.sign({_id: user.id}, SECRET_KEY, {
            expiresIn: '2 days'
        });

        return token;
    }
}