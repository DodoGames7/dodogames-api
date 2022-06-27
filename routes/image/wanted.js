module.exports = {
    path: '/image/wanted',
    code: `
$send[200;canvas;$default]
$drawImage[filter;0;0;512;512]
$drawImage[avatar;0;0;400;400]
$createCanvas[512;512]
$loadImage[filter;url;$replaceText[https://cdn.discordapp.com/attachments/647127947144069120/990960395458064414/cachedImage.png;$getQuery[image]]]
$if[$isImage[avatar]==false;400;{
error: 'Invalid image provided.'
}]
$loadImage[avatar;url;$getQuery[image]]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
`
}