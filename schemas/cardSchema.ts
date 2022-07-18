import Joi from "joi";
import { CreateCardData } from "../services/cardService.js";

type insertCardData = Omit<CreateCardData, 'userId'>

export const cardSchema = Joi.object<insertCardData>({
    title: Joi.string().required(),
    number: Joi.string().required(),
    printedName: Joi.string().required(),
    cvc: Joi.string().regex(/^[0-9]{3}$/).required(),
    expiryDate: Joi.string().required(),
    password: Joi.string().regex(/^[0-9]{4}$/).required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().required().valid('creditCard', 'debitCard','both'),

});
