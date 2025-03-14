import { UnavailableGuild } from "../guilds/unavailableGuild.ts";
import { Application } from "../applications/application.ts";
import { User } from "../users/user.ts";
import { SnakeCasedPropertiesDeep } from "../util.ts";

/** https://discord.com/developers/docs/topics/gateway#ready */
export interface Ready {
  /** Gateway version */
  v: number;
  /** Information about the user including email */
  user: User;
  /** The guilds the user is in */
  guilds: UnavailableGuild[];
  /** Used for resuming connections */
  sessionId: string;
  /** The shard information associated with this session, if sent when identifying */
  shard?: [number, number];
  /** Contains id and flags */
  application: Partial<Application> & Pick<Application, "id" | "flags">;
}

export type DiscordReady = SnakeCasedPropertiesDeep<Ready>;
