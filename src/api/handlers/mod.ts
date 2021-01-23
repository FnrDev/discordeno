import {
  channelOverwriteHasPermission,
  createInvite,
  deleteInvite,
  deleteMessages,
  editChannel,
  followChannel,
  getChannelInvites,
  getChannelWebhooks,
  getInvite,
  getMessage,
  getMessages,
  getPins,
  isChannelSynced,
  sendMessage,
  startTyping,
} from "./channel.ts";
import { getGatewayBot } from "./gateway.ts";
import {
  ban,
  categoryChildrenIDs,
  createEmoji,
  createGuildChannel,
  createGuildFromTemplate,
  createGuildRole,
  createGuildTemplate,
  createServer,
  deleteChannel,
  deleteChannelOverwrite,
  deleteEmoji,
  deleteGuildTemplate,
  deleteIntegration,
  deleteRole,
  deleteServer,
  editChannelOverwrite,
  editEmbed,
  editEmoji,
  editGuild,
  editGuildTemplate,
  editIntegration,
  editRole,
  emojiURL,
  fetchMembers,
  getAuditLogs,
  getAvailableVoiceRegions,
  getBan,
  getBans,
  getChannel,
  getChannels,
  getEmbed,
  getEmoji,
  getEmojis,
  getGuild,
  getGuildPreview,
  getGuildTemplate,
  getGuildTemplates,
  getIntegrations,
  getInvites,
  getMember,
  getMembersByQuery,
  getPruneCount,
  getRoles,
  getTemplate,
  getUser,
  getVanityURL,
  getVoiceRegions,
  getWebhooks,
  guildBannerURL,
  guildIconURL,
  guildSplashURL,
  leaveGuild,
  pruneMembers,
  swapChannels,
  swapRoles,
  syncGuildTemplate,
  syncIntegration,
  unban,
} from "./guild.ts";
import {
  addRole,
  avatarURL,
  editBotNickname,
  editBotProfile,
  editMember,
  kick,
  kickFromVoiceChannel,
  moveMember,
  rawAvatarURL,
  removeRole,
  sendDirectMessage,
} from "./member.ts";
import {
  addReaction,
  addReactions,
  deleteMessage,
  deleteMessageByID,
  editMessage,
  getReactions,
  pin,
  publishMessage,
  removeAllReactions,
  removeReaction,
  removeReactionEmoji,
  removeUserReaction,
  unpin,
} from "./message.ts";
import { getApplicationInformation } from "./oauth.ts";
import {
  createSlashCommand,
  createWebhook,
  deleteSlashCommand,
  deleteSlashResponse,
  deleteWebhookMessage,
  editSlashCommand,
  editSlashResponse,
  editWebhookMessage,
  executeSlashCommand,
  executeWebhook,
  getSlashCommands,
  getWebhook,
  upsertSlashCommand,
} from "./webhook.ts";

export let handlers = {
  // Channel handler
  channelOverwriteHasPermission,
  createInvite,
  deleteMessages,
  editChannel,
  followChannel,
  getChannelInvites,
  getChannelWebhooks,
  getMessage,
  getMessages,
  getPins,
  isChannelSynced,
  sendMessage,
  getInvite,
  deleteInvite,
  startTyping,

  // Gateway handler
  getGatewayBot,

  // Guild handler
  ban,
  categoryChildrenIDs,
  createEmoji,
  createGuildChannel,
  createGuildFromTemplate,
  createGuildRole,
  createGuildTemplate,
  createServer,
  deleteChannel,
  deleteEmoji,
  deleteGuildTemplate,
  deleteIntegration,
  deleteRole,
  deleteServer,
  editEmbed,
  editEmoji,
  editGuild,
  editGuildTemplate,
  editIntegration,
  editRole,
  emojiURL,
  fetchMembers,
  getAuditLogs,
  getBan,
  getBans,
  getChannel,
  getChannels,
  getEmbed,
  getEmoji,
  getEmojis,
  getGuild,
  getGuildPreview,
  getGuildTemplate,
  getGuildTemplates,
  getAvailableVoiceRegions,
  getIntegrations,
  getInvites,
  getMember,
  getTemplate,
  getMembersByQuery,
  getPruneCount,
  getRoles,
  getUser,
  getVanityURL,
  getVoiceRegions,
  getWebhooks,
  guildBannerURL,
  guildIconURL,
  guildSplashURL,
  leaveGuild,
  pruneMembers,
  swapChannels,
  editChannelOverwrite,
  deleteChannelOverwrite,
  swapRoles,
  syncGuildTemplate,
  syncIntegration,
  unban,

  // Member handler
  addRole,
  avatarURL,
  editBotProfile,
  editBotNickname,
  editMember,
  kick,
  moveMember,
  rawAvatarURL,
  removeRole,
  sendDirectMessage,
  kickFromVoiceChannel,

  // Message handler
  addReaction,
  addReactions,
  deleteMessage,
  deleteMessageByID,
  editMessage,
  getReactions,
  pin,
  publishMessage,
  removeAllReactions,
  removeReaction,
  removeReactionEmoji,
  removeUserReaction,
  unpin,

  // Webhook handler
  createWebhook,
  executeWebhook,
  getWebhook,
  editWebhookMessage,
  deleteWebhookMessage,
  createSlashCommand,
  getSlashCommands,
  upsertSlashCommand,
  editSlashCommand,
  deleteSlashCommand,
  executeSlashCommand,
  deleteSlashResponse,
  editSlashResponse,

  // OAuth handler
  getApplicationInformation,
};

export type Handlers = typeof handlers;

export function updateHandlers(newHandlers: Partial<Handlers>) {
  handlers = {
    ...handlers,
    ...newHandlers,
  };
}
