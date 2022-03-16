// created by Sherry //
const DiscordRPC = require('discord-rpc'); // to use discord rich presence modules in this code.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // making client variable with in our rich presence client.
require('dotenv').config(); // to include contents of our .env file (the application id).
(async () => {
    client.on('ready', async () => { // starting ready event.
        await client.setActivity({ // Set the values as you want, these values will appear on your status.
// NOTE: be carefull only change the value that are written inside double quoted commas.
            buttons: [
            { label: `don't click (explicit content)`, url: "https://www.instagram.com/leme_sherry" },
        { label: `BOT LINK`, url: "https://discord.com/oauth2/authorize?client_id=845208558736113684&permissions=37088600&scope=bot" }],
//        {label: "Github", url: "https://github.com/lemesherry"}],
            details: "Stop stalking babes ^_^",
            state: "Love you 3000 now fuck off <3",
            startTimestamp: new Date(),
            smallImageKey: "sherry",
            smallImageText: "Still stalking?",
            largeImageKey: "sherry1",
            largeImageText: "Sherry"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
