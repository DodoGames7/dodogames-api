module.exports["route"] = {
    url: '/api/ver',
    method: "GET",
    code: `
        $reply[
            $setCode[200]
            $setType[JSON]
            $setBody[{
                "version": "2.0.2",
                "type": "Pre-release",
                "changelog": "https://github.com/DodoGames7/dodogames-api/releases"
            }]
        ]
    `
}