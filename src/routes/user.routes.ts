import { Router } from "express";
import { Authentication } from "../middleware/Authentication";
import { UpdateUserAction } from "../modules/User/Application/Rest/UpdateUserAction";

const updateUserAction = new UpdateUserAction();

const userRoutes = Router();

userRoutes.put("/", Authentication, updateUserAction.handle);

export { userRoutes };
