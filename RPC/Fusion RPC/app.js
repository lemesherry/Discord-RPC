// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "Invite my bot", url: "https://discord.com/api/oauth2/authorize?client_id=845208558736113684&permissions=3263552&scope=bot" }],
            details: "Stop stalking babes",
            startTimestamp: new Date(),
            smallImageKey: "sherry",
            smallImageText: "Love you 3000",
            largeImageKey: "sherry1",
            largeImageText: "Ya its me Sherry"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();