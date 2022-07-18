import { Router } from "express";
import { deleteCredentialById, getCredentialById, getCredentials, newCredential } from "../controllers/credentialControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialsRouter = Router();

credentialsRouter.post('/credential',validateToken, validateSchemaMiddleware(credentialSchema), newCredential)
credentialsRouter.get('/credential/:id',validateToken, getCredentialById)
credentialsRouter.get('/credentials',validateToken, getCredentials)
credentialsRouter.delete('/credential/:id',validateToken, deleteCredentialById)



export default credentialsRouter;