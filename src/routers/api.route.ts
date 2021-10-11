import { Router } from "express";

const router = Router();

router.get("/words", (_, res) => {
	res.send(["Architect", "superstructure"]);
});

export default router;
