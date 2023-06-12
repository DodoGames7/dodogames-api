// Credits to easy-api.ts template
module.exports = {
    path: '/text/owoify',
    code: `
$send[200;json;{
error: false,
owoified: '$replaceRegexp[$replaceRegexp[$getQuery[text];/r|l/;g;w];/R|L/;g;W]'
}]
$if[$getQuery[text]==undefined;400;{
error: 'Missing query parameter called text.'
}]
`
}