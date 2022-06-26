module.exports = {
    path: '/image/simp',
    code: `
$send[200;canvas;$default]
$drawImage[filter;0;0;512;512]
$drawImage[avatar;0;0;512;512]
$createCanvas[512;512]
$loadImage[filter;url;https://cdn.discordapp.com/attachments/833143441180983326/962953114254725180/simp.png]
$if[$isImage[avatar]==false;400;{
error: 'Invalid image provided.'
}]
$loadImage[avatar;url;$getQuery[image]]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
`
}