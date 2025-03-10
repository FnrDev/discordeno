import { Bot } from "../../bot.ts";
import { statusTypes } from "../../transformers/presence.ts";
import type { DiscordGatewayPayload } from "../../types/gateway/gatewayPayload.ts";
import type { GuildMembersChunk } from "../../types/members/guildMembersChunk.ts";
import { SnakeCasedPropertiesDeep } from "../../types/util.ts";

export async function handleGuildMembersChunk(bot: Bot, data: DiscordGatewayPayload) {
  const payload = data.d as SnakeCasedPropertiesDeep<GuildMembersChunk>;

  const guildId = bot.transformers.snowflake(payload.guild_id);

  if (payload.nonce && payload.chunk_index >= payload.chunk_count - 1) {
    bot.cache.fetchAllMembersProcessingRequests.get(payload.nonce)?.(
      `Member fetching complete. Nonce: ${payload.nonce}`,
    );
  }

  return {
    guildId,
    members: payload.members.map((m) =>
      bot.transformers.member(bot, m, guildId, bot.transformers.snowflake(m.user.id))
    ),
    chunkIndex: payload.chunk_index,
    chunkCount: payload.chunk_count,
    notFound: payload.not_found?.map((id) => bot.transformers.snowflake(id)),
    presences: payload.presences?.map((presence) => ({
      user: bot.transformers.user(bot, presence.user),
      guildId,
      status: statusTypes[presence.status],
      activities: presence.activities.map((activity) => bot.transformers.activity(bot, activity)),
      clientStatus: {
        desktop: presence.client_status.desktop,
        mobile: presence.client_status.mobile,
        web: presence.client_status.web,
      },
    })),
    nonce: payload.nonce,
  };
}
