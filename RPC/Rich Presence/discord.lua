citizen.CreateThread(function()
    while true do
        local player = GetPlayerPed(-1)
        -- citizen.wait(5*1000)
        citizen(60000)

        SetDiscordAppId(853261276738486333)
        

        -- Status
        SetRichPresence( "Playing with your heart")

        SetDiscordRichPresenceAsset("sherry1")
        SetDiscordRichPresenceAssetText("Ya its me Sherry")
        
        SetDiscordRichPresenceAssetSmall("sherry")
        SetDiscordRichPresenceAssetSmallText("Love you 3000")

        SetDiscordRichPresenceAction(0, "Add my bot to your server", "https://discord.com/api/oauth2/authorize?client_id=845208558736113684&permissions=3263552&scope=bot")

    end
end)