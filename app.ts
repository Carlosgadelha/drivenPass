import cors from "cors";
import express from "express";
import "express-async-errors";
import dotenv from "dotenv"

import { errorHandlerMiddleware } from "./middlewares/errorMiddleware.js";
import router from "./routers/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
