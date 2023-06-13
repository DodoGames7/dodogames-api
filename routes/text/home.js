module.exports = {
    path: '/',
    code: `
$send[200;json;{
text: 'Welcome to the API.',
endpoints: [
'/text/owoify',
'/image/simp',
'/image/rankcard',
'/image/wanted',
'/8ball',
'/randomtopic'
]
other: [
'/color'
]
api-itself: [
'/dodogames/version',
'/dodogames/discord',
'/dodogames/source',
'/dodogames/info'
]
}]
`
}