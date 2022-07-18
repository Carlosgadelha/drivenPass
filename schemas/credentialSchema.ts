import Joi from "joi";
import { CreateCredentialData } from "../services/credentialService.js";

type insertCredentialData = Omit<CreateCredentialData, 'userId'>

export const credentialSchema = Joi.object<insertCredentialData>({
    title: Joi.string().required(),
    url: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
