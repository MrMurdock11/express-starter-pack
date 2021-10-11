import cors from "cors";
import express, { json, urlencoded } from "express";

import { api } from "@routers";

const app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/api/v1", api);

app.get("/", (_, res) => {
	res.send("Welcome to your first 🧩application!");
});

export default app;
