import express from "express";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { message } = req.body;

  // Temporary bot response
  const reply = `You said: ${message}. I'm here to support your mental wellness.`;

  res.json({ reply });
});

export default router;
