import { Router } from "express";
import cardRouter from "./cardRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import secureNotesRouter from "./secureNotesRouter.js";
import userRouter from "./userRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(userRouter);
router.use(credentialsRouter)
router.use(secureNotesRouter)
router.use(cardRouter)
router.use(wifiRouter)

export default router;