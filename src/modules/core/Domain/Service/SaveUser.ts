import { User } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { SaveUserDto } from "../Dto/SaveUserDto";
import bcrypt from "bcrypt";

export class SaveUser {
    async execute({email, password, name}: SaveUserDto): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (userAlreadyExists) {
            throw new AppError("Já existe usuário com esse email!");
        }

        const passwordHash:string = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: passwordHash
            },
        });

        return user;
    }
}