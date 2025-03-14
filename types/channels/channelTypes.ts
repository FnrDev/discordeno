/** https://discord.com/developers/docs/resources/channel#channel-object-channel-types */
export enum ChannelTypes {
  /** A text channel within a server */
  GuildText,
  /** A direct message between users */
  DM,
  /** A voice channel within a server */
  GuildVoice,
  /** A direct message between multiple users */
  GroupDm,
  /** An organizational category that contains up to 50 channels */
  GuildCategory,
  /** A channel that users can follow and crosspost into their own server */
  GuildNews,
  /** A channel in which game developers can sell their game on Discord */
  GuildStore,
  /** A temporary sub-channel within a GUILD_NEWS channel */
  GuildNewsThread = 10,
  /** A temporary sub-channel within a GUILD_TEXT channel */
  GuildPublicThread,
  /** A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission */
  GuildPrivateThread,
  /** A voice channel for hosting events with an audience */
  GuildStageVoice = 13,
}
