// Credits to the person who made this.
module.exports = {
    path: '/image/rankcard',
    code: `
$send[200;canvas;$default]
$drawText[LEVEL: $getQuery[level];255;65;360;25;left;top]
$font[16;DejaVu Sans;bold]

$drawText[$getQuery[username]#$getQuery[discriminator];255;20;360;25;left;top]
$font[35;DejaVu Sans;bold]

$drawText[GOAL: $getQuery[total];500;105;360;50;left;top]
$drawText[XP: $getQuery[xp];255;105;360;50;left;top]
$color[#FFFFFF]

$font[15;DejaVu Sans]

$ignore[bar drawing ends]
$drawRect[255;130;$math[($getQuery[xp] / $getQuery[total]) * 360];35]
$color[#253fce]
$opacity[100]
$drawRect[255;130;360;35]
$opacity[70]
$color[#808080]
$ignore[bar drawing starts]

$drawImage[image;50;15;170;170;90]

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