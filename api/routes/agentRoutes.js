// routes/agentRoutes.js
import express from "express";
import { getAllAgents, getAgentById } from "../controllers/agentController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getAllAgents); // Get all agents
router.get("/:id", getAgentById); // Get a single agent by ID

// Add verifyToken middleware if authentication is required
// router.get("/", verifyToken, getAllAgents);
// router.get("/:id", verifyToken, getAgentById);

export default router;