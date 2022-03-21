// created by Sherry //
const DiscordRPC = require('discord-rpc'); // to use discord rich presence modules in this code.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // making client variable with in our rich presence client.
require('dotenv').config(); // to include contents of our .env file (the application id).
(async () => {
    client.on('ready', async () => { // starting ready event.
        await client.setActivity({ // Set the values as you want, these values will appear on your status.
// NOTE: be carefull only change the value that are written inside double quoted commas.
            buttons: [{ label: "Check out story for detail", url: "https://www.instagram.com/leme_sherry" },
        {label: "Github", url: "https://github.com/lemesherry"}],
            details: "so i don't have friends/servers anymore",
            state: "if you were friends with me before <mention me somewhere and i'll add you>",
            startTimestamp: new Date(),
            smallImageKey: "ss",
            smallImageText: "that wasn't me 👀",
            largeImageKey: "ll",
            largeImageText: "stop stalking honey 👀"
        }).catch(err => console.log(err));

        console.log("RPC enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();