import { Client } from "discord.js";
const bot = new Client({intents: 3276799})
import { token } from "./config.json";

console.log("Connexion au bot...");
bot.login(token)
