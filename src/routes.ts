import { Router } from "express";

import { coreRoutes } from "./routes/core.routes";
import { userRoutes } from "./routes/user.routes";

const routes = Router();

routes.use("/core", coreRoutes);
routes.use("/user", userRoutes);

export { routes };
