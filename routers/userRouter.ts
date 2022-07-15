import { Router } from "express";
import { newUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post('/signup', newUser)

export default userRouter;