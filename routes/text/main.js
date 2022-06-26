module.exports = {
    path: '/',
    code: `
$send[200;json;{
text: 'Welcome to the API.',
routes: [
'/text/owoify',
'/image/simp',
'/image/rankcard'
]
other: [
'color'
]
}]
`
}