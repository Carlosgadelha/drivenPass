import { Router } from "express";
import { login, newUser } from "../controllers/userControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { loginSchema, userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/signup',validateSchemaMiddleware(userSchema), newUser)
userRouter.post('/signin', validateSchemaMiddleware(loginSchema), login)

export default userRouter;