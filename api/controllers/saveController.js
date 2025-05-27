import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Save or unsave a post
export const savePost = async (req, res) => {
  const { postId } = req.body;
  const userId = req.userId; // Updated to use req.userId from verifyToken middleware

  try {
    // Validate postId
    if (!postId) {
      return res.status(400).json({ message: 'Post ID is required' });
    }

    // Check if the post exists
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the post is already saved by the user
    const existingSavedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: { userId, postId },
      },
    });

    if (existingSavedPost) {
      // If already saved, remove it (unsave)
      await prisma.savedPost.delete({
        where: {
          userId_postId: { userId, postId },
        },
      });
      return res.status(200).json({ isSaved: false });
    } else {
      // If not saved, create a new saved post entry
      await prisma.savedPost.create({
        data: {
          userId,
          postId,
        },
      });
      return res.status(200).json({ isSaved: true });
    }
  } catch (err) {
    console.error('Error saving post:', err);
    return res.status(500).json({ message: 'Failed to save post' });
  } finally {
    await prisma.$disconnect();
  }
};