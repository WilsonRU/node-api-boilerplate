import * as dotenv from 'dotenv'
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { routes } from './routes';
import { ErrorHandler } from './middleware/ErrorHandler';

dotenv.config();
const app = express();

app.use(express.json());

app.use(routes);
app.use(ErrorHandler);

app.listen(process.env.APP_PORT, () => console.log(`Server is running in port ${process.env.APP_PORT} 🚀`));
