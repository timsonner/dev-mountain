import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(json());

import { getCompliment } from './controller.js';

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));
