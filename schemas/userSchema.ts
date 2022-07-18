import Joi from "joi";
import { CreateUserData } from "../services/usersService.js";

type Login = Omit<CreateUserData, 'name'>

export const userSchema = Joi.object<CreateUserData>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});

export const loginSchema = Joi.object<Login>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
});