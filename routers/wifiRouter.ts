import { Router } from "express";
import { deleteNetworkById, getNetworkById, getNetworks, newNetwork } from "../controllers/wifiControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post('/wifi', validateToken, validateSchemaMiddleware(wifiSchema), newNetwork)
wifiRouter.get('/wifi/:id', validateToken, getNetworkById)
wifiRouter.get('/wifi', validateToken, getNetworks)
wifiRouter.delete('/wifi/:id', validateToken, deleteNetworkById)



export default wifiRouter;