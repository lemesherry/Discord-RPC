// created by Sherry //
const DiscordRPC = require('discord-rpc'); // to use discord rich presence module in this code.
const clientID = "868439190197633024"; // client id of application
const client = new DiscordRPC.Client({ transport: 'ipc' }); // calling client constructor in order to access its variables and functions
DiscordRPC.register(clientID); // registering client id

(async () => {
    client.on('ready', async () => { // performing functionality on application ready.
        await client.setActivity({ // Activity settings
            /* NOTE: be carefull only change the value that are written string values.
             Set the values as you want, these values will appear on your status.
            */
            buttons: [
                { label: `don't click (explicit content)`, url: "https://www.pinterest.com/lemesherry" },
                { label: "Github", url: "https://github.com/lemesherry" }],
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

    await client.login({ clientId: clientID }).catch(console.error); // Logging into our application.
})();
