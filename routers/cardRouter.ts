import { Router } from "express";
import { getCardById, getCards, newCard, deleteCardById } from "../controllers/cardControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.post('/card', validateToken, validateSchemaMiddleware(cardSchema), newCard)
cardRouter.get('/card/:id', validateToken, getCardById)
cardRouter.get('/cards', validateToken, getCards)
cardRouter.delete('/card/:id', validateToken, deleteCardById)



export default cardRouter;