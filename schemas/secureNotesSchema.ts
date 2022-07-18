import Joi from "joi";
import { CreateSecureNotesData } from "../services/secureNotesService.js";

type insertSecureNotesData = Omit<CreateSecureNotesData, 'userId'>

export const secureNotesSchema = Joi.object<insertSecureNotesData>({
    title: Joi.string().required().max(50),
    content: Joi.string().required().max(1000)
});
