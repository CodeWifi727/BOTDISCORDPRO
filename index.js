const Discord = require("discord.js")
const Player = require("discord-player")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})

console.log("Connexion au bot...");
Client.login("MTA0NDE2NDA5NTYyMjAwMDczMA.G8j9T5.mThEdtzl6gQRcinbKuX5sVHRZWu2cz83hLNTbw")
    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));

Client.on("ready", async () => {

    await Client.application.commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ]);

    console.log("Le bot est prêt !");
});

Client.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping")
        interaction.reply("Pong!");
});