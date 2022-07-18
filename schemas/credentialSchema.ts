import Joi from "joi";
import { CreateCredentialData } from "../services/credentialService.js";

export const credentialSchema = Joi.object<CreateCredentialData>({
    title: Joi.string().required(),
    url: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    userId: Joi.number().required()
});
