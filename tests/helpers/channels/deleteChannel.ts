import { bot } from "../../mod.ts";
import { delayUntil } from "../../utils.ts";

export async function deleteChannelTests(guildId: bigint, options: { reason?: string }) {
  // Create the necessary channels
  const channel = await bot.helpers.createChannel(guildId, {
    name: "delete-channel",
  });

  await delayUntil(10000, () => bot.channels.has(channel.id));
  // Make sure the channel was created.
  if (!bot.channels.has(channel.id)) {
    throw new Error("The channel should have been created but it is not in the cache.");
  }

  // Delete the channel now without a reason
  await bot.helpers.deleteChannel(channel.id, options.reason);
  // wait to give it time for event
  await delayUntil(10000, () => !bot.channels.has(channel.id));

  // Make sure it is gone from cache
  if (bot.channels.has(channel.id)) {
    throw new Error("The channel should have been deleted but it is still in cache.");
  }
}
