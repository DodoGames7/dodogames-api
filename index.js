const { API } = require('easy-api.ts')

const api = new API({
    port: process.env.PORT || 3000,
  database: {
        enabled: true,
        type: 'default'
  }
})

api.routes.add({
    path: '/color',
    code: `
    $ignore[Check docs to see how does functions work]
    $send[200;canvas;$default]
    $drawRect[0;0;512;512]
    $color[$getQuery[hex]]
    $createCanvas[512;512]
    $if[$isValidHex[$getQuery[hex]]==false;400;{
        error: "Invalid hex code provided."
    }]
    $if[$getQuery[hex]==undefined;400;{
        error: "Missing 'hex' parameter."
    }]
    `
})


// Lets load the handler...
api.routes.load('./routes').then(() => {
    console.log('Api loaded! DodoGames api can now be used!')
    api.connect() // We're connecting to the API when the source is loaded.
})