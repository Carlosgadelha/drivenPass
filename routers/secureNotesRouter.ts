import { Router } from "express";
import { deleteNoteById, getNoteById, getNotes, newNote } from "../controllers/secureNotesControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import { secureNotesSchema } from "../schemas/secureNotesSchema.js";

const secureNotesRouter = Router();

secureNotesRouter.post('/securenote', validateToken, validateSchemaMiddleware(secureNotesSchema), newNote)
secureNotesRouter.get('/securenote/:id', validateToken, getNoteById)
secureNotesRouter.get('/securenotes', validateToken, getNotes)
secureNotesRouter.delete('/securenote/:id', validateToken, deleteNoteById)



export default secureNotesRouter;