module.exports = {
    path: '/image/rankcard',
    code: `
$send[200;canvas;$default]
$drawText[LEVEL: $getQuery[level];255;115;360;50;left;top]
$color[#FFFFFF]
$font[25;DejavuSans]

$ignore[bar drawing ends]
$drawRect[255;130;200;35;15]
$color[#253fce]
$opacity[100]
$drawRect[255;130;360;35;15]
$opacity[70]
$color[#808080]
$ignore[bar drawing starts]

$drawImage[image;50;15;175;175;95]

$ignore[here we're drawing the background]
$drawRect[0;0;680;200;30]
$color[#14171c]
$createCanvas[680;200]

$ignore[loading the image]

$if[$isImage[image]==false;400;{
error: 'Invalid image provided.'
}]
$loadImage[image;url;$getQuery[image]]

$ignore[the if to check missing parameters]

$if[$getQuery[image]==undefined||$getQuery[username]==undefined||$getQuery[xp]==undefined||$getQuery[total]==undefined||$getQuery[level]==undefined;400;{
error: 'Missing query parameters.'
}]
`
}