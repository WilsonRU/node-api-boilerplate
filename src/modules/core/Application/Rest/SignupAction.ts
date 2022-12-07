import { Request, Response } from "express";
import { SaveUser } from "../../Domain/Service/SaveUser";

export class SignupAction{
    async handle(req: Request, res: Response) {
        const {email, password, name} = req.body;

        const saveUser = new SaveUser();

        await saveUser.execute({email, password, name});

        res.status(201).json({
            status_code: '201',
            message: "Usuario Cadastrado com sucesso."
        });
    }
}