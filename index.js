const { API } = require('easy-api.ts')

const api = new API({
    port: process.env.PORT || 3000,
  database: {
        enabled: true,
        type: 'default'
  }
})


// Lets load the handler...
api.routes.load('./routes').then(() => {
    console.log('Api loaded! DodoGames api can now be used!')
    api.connect() // We're connecting to the API when the source is loaded.
})