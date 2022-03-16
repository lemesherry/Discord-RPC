// created by Sherry //
const DiscordRPC = require('discord-rpc'); // to use discord rich presence modules in this code.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // making client variable with in our rich presence client.
require('dotenv').config(); // to include contents of our .env file (the application id).
(async () => {
    client.on('ready', async () => { // starting ready event.
        await client.setActivity({ // Set the values as you want, these values will appear on your status.
// NOTE: be carefull only change the value that are written inside double quoted commas.
            buttons: [{ label: `Don't click (explicit content)`, url: "https://www.instagram.com/leme_sherry" },
        {label: "Github", url: "https://github.com/lemesherry"}],
            details: "I love you and",
            state: "its killing me </3",
            startTimestamp: new Date(),
            smallImageKey: "smalll",
            smallImageText: "I still love you 3000 <3",
            largeImageKey: "largee",
            largeImageText: "Stop Stalking"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
