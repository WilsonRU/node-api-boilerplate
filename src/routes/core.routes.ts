import { Router } from "express";
import { LoginAction } from "../modules/core/Application/Rest/LoginAction";
import { SignupAction } from "../modules/core/Application/Rest/SignupAction";

const loginAction = new LoginAction();
const signupAction = new SignupAction();

const coreRoutes = Router();

coreRoutes.post("/login", loginAction.handle);
coreRoutes.post("/signup", signupAction.handle)

export { coreRoutes };
