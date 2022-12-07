import { Router } from "express";
import { LoginAction } from "../modules/Core/Application/Rest/LoginAction";
import { SignupAction } from "../modules/Core/Application/Rest/SignupAction";

const loginAction = new LoginAction();
const signupAction = new SignupAction();

const coreRoutes = Router();

coreRoutes.post("/login", loginAction.handle);
coreRoutes.post("/signup", signupAction.handle)

export { coreRoutes };
