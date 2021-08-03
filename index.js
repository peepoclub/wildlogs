// Prisma Client
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;
const prisma = new PrismaClient()

// Twitch Client
import { ChatClient } from "dank-twitch-irc";
const client = new ChatClient();

// Add new line to log database

client.on("JOIN", (e) => console.log(`🟢 Connected to chat ${e.channelName}`));
client.on("close", (e) => {
  if (e !== null) {
    console.error("🔴 Client closed due to error", e);
  }
});

client.on("PRIVMSG", async (e) => {
    await prisma.logs.create({
        data: {
            channel: e.channelName,
            channelID: e.ircTags["room-id"],
            name: e.ircPrefix.nickname,
            displayName: e.displayName,
            userID: e.ircTags["user-id"],
            message: e.messageText,
            tags: JSON.stringify(e.ircTags),
            timestamp: Date.now() / 1000 | 0,
        }
    })
});

client.connect();
client.joinAll(process.env.CHANNELS.split(","));