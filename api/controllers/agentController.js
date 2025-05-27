// controllers/agentController.js
import prisma from "../lib/prisma.js";

// @desc    Get all agents (users)
// @route   GET /api/agents
// @access  Public (or add verifyToken middleware if needed)
export const getAllAgents = async (req, res) => {
  try {
    const agents = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        avatar: true,
        // Exclude password
      },
    });
    res.status(200).json({
      success: true,
      data: agents,
      count: agents.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get agents!" });
  }
};

// @desc    Get a single agent by ID
// @route   GET /api/agents/:id
// @access  Public (or add verifyToken middleware if needed)
export const getAgentById = async (req, res) => {
  const id = req.params.id;
  try {
    const agent = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        avatar: true,
        // Exclude password
      },
    });
    if (!agent) {
      return res.status(404).json({ message: "Agent not found!" });
    }
    res.status(200).json({
      success: true,
      data: agent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get agent!" });
  }
};