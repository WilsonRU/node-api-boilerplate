import { Request, Response } from "express";
import { GetUser } from "../../Domain/Service/GetUser";

export class LoginAction {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const getUser = new GetUser();

        const result = await getUser.execute({email, password});

        return res.status(200).json({
            message: "Authenticado com sucesso",
            token: result
        });
    }
}