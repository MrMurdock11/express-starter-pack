import cors from "cors";
import express, { json, urlencoded } from "express";

const app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (_, res) => {
	res.send("Welcome to your first 🧩application!");
});

export default app;
