import { Request, Response } from "express";
import { UpdateUser } from "../../Domain/Service/UpdateUser";

export class UpdateUserAction {
    async handle(req: Request, res: Response) {
        const id = req.token._id;
        const { name } = req.body;
        const updateUser = new UpdateUser();

        await updateUser.execute({ id, name });

        res.status(202).json({
            status_code: 202,
            message: "Atualizado com sucesso"
        });
    }
}