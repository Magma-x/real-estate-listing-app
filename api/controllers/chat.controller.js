import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        users: true,
      },
    });

    for (const chat of chats) {
      const receiver = chat.users.find((user) => user.id !== tokenUserId);
      chat.receiver = receiver || null;
    }

    res.status(200).json(chats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chats!" });
  }
};

export const getChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
        users: true,
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    await prisma.chat.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: tokenUserId,
        },
      },
    });

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get chat!" });
  }
};

export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  const { receiverId } = req.body;

  if (!receiverId) {
    return res.status(400).json({ message: "Receiver ID is required!" });
  }

  // Validate ObjectID
  const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);
  if (!isValidObjectId(receiverId) || !isValidObjectId(tokenUserId)) {
    return res.status(400).json({ message: "Invalid user ID format!" });
  }

  try {
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found!" });
    }

    const newChat = await prisma.chat.create({
      data: {
        userIDs: [tokenUserId, receiverId],
        users: {
          connect: [{ id: tokenUserId }, { id: receiverId }],
        },
      },
    });

    res.status(200).json(newChat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add chat!" });
  }
};

export const readChat = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          push: tokenUserId,
        },
      },
      include: {
        users: true,
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    res.status(200).json(chat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to read chat!" });
  }
};

export const findChat = async (req, res) => {
  const { userId1, userId2 } = req.params;

  // Validate ObjectIDs
  const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);
  if (!userId1 || !userId2 || !isValidObjectId(userId1) || !isValidObjectId(userId2)) {
    return res.status(400).json({ message: "Invalid user IDs provided!" });
  }

  try {
    console.log("Finding chat for userId1:", userId1, "and userId2:", userId2);
    const chat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          hasEvery: [userId1, userId2],
        },
      },
      include: {
        users: true,
      },
    });
    console.log("Chat found:", chat);
    res.status(200).json(chat || null); // Return null if no chat found
  } catch (err) {
    console.error("Error in findChat:", err.message);
    console.error("Stack trace:", err.stack);
    res.status(500).json({ message: "Failed to find chat!" });
  }
};