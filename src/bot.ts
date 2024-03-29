import { ActivityTypes, PresenceStatuses } from "detritus-client/lib/constants";
import { GatewayIntents } from "detritus-client-socket/lib/constants";
import BelfastClient from "./client";
import { TOKEN } from "../config.json";

const client = new BelfastClient(TOKEN, {
    gateway: {
        compress: false,
        intents: [GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES, GatewayIntents.GUILD_MEMBERS, GatewayIntents.GUILD_PRESENCES, GatewayIntents.GUILD_VOICE_STATES],
        shardCount: 1,
        autoReconnect: true,
        presence: {
            activity: {
                name: "Me Being Rewrite",
                type: ActivityTypes.WATCHING
            },
            status: PresenceStatuses.IDLE
        }
    },
    imageFormat: "png",
    cache: {
        messages: {
            limit: 100,
            enabled: true,
            expire: 60 * 60 * 1000
        }
    }
});

// Launch everything 
client.launch();
client.launchDB();
client.launchLavalink();