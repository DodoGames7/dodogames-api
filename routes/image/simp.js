// Mostly used from easy-api.ts template for learning. Credits to that as well
module.exports = {
    path: '/image/simp',
    code: `
    $loadImage[filter;url;https://cdn.discordapp.com/attachments/833143441180983326/962953114254725180/simp.png]
$if[$isImage[avatar]==false;400;{
error: 'Invalid image provided.'
}]
$loadImage[avatar;url;$getQuery[image]]
$drawImage[filter;0;0;512;512]
$drawImage[avatar;0;0;512;512]
$createCanvas[512;512]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
$send[200;canvas;$default]
`
}