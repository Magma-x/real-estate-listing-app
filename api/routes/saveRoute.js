import express from 'express';
import { savePost } from '../controllers/saveController.js';
import { verifyToken } from '../middleware/verifyToken.js';

// Initialize router
const router = express.Router();

// Route for saving a post
router.post('/save', verifyToken, savePost);

export default router;