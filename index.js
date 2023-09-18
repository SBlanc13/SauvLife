const fs = require('node:fs');
const path = require('node:path');

const { Client, GatewayIntentBits, Events, Partials, ActivityType } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.User,
  ],
});

let status = [
  {
    name: "Sauv'Life",
    type: ActivityType.Watching,
  },
  {
    name: "Sauv'Life",
    type: ActivityType.Streaming,
    url: "https://www.youtube.com/@SAUVLife",
  },
  {
    name: "Sauv'Life",
    type: ActivityType.Watching,
  }
]

client.on(Events.ClientReady, c => {
  console.log(`${c.user.tag} est connecté !`);

  setInterval(() => {
  let random = Math.floor(Math.random() * status.length);
  client.user.setActivity(status(random));
  }, 10000)
});

client.login(token);