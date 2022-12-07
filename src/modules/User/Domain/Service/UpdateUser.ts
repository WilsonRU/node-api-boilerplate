import { User } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UpdateUserDto } from "../Dto/UpdateUserDto";

export class UpdateUser {
    async execute({id, name}: UpdateUserDto): Promise<void> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!userAlreadyExists) {
            throw new AppError("Usuário não encontrado");
        }

        await prisma.user.update({
            where: {
                id
            },
            data: {
                name
            }
        });
    }
}