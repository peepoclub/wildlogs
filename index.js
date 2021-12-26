// Prisma Client
import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

// Twitch Client
import { ChatClient } from "dank-twitch-irc";
const client = new ChatClient();

client.on("JOIN", (e) => console.log(`🟢 Connected to chat ${e.channelName}`));

client.on("close", (e) => {
  if (e !== null) {
    console.error("🔴 Client closed due to error", e);
  }
});

client.on("PRIVMSG", async (data) => {
  const {
    channelName: channel,
    channelID,
    senderUsername: name,
    displayName,
    senderUserID: userID,
    messageText: message,
  } = data;

  // Add new line to log database
  await prisma.logs.create({
    data: {
      channel,
      channelID,
      name,
      displayName,
      userID,
      message,
      tags: JSON.stringify(data.ircTags),
      timestamp: (Date.now() / 1000) | 0,
    },
  });
});

// Connect to Twitch
client.connect();

// Join to channels
client.joinAll(process.env.CHANNELS.split(","));
