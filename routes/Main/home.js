// path: './routes/../../../route.js'
module.exports["route"] = {
    url: '/',
    method: "GET",
    code: `
        $reply[
            $setCode[200]
            $setType[JSON]
            $setBody[{
                "text": "Welcome to dodogames api! Here are the current endpoints you can use though."
                "api": [
                    "/api/ver"
                ],
                "misc": [
                "/color"
                ]
            }]
        ]
    `
}