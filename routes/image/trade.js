module.exports = {
  path: '/image/trade',
  code: `$send[200;canvas;$default]


$drawText[$escape[$getQuery[text1]];45;140;250;250;left;top]
$font[24;Uni;bold]
$drawText[$escape[$getQuery[text2]];105;140;250;250;right;top]
$font[24;Uni;bold]
    $drawImage[image;0;0;496;618]
    $loadImage[image;url;https://media.discordapp.net/attachments/951090130129649685/998289079659675798/Lol.png]
    $createCanvas[496;618]
   $registerFont[home/runner/Anpi/Unified-Regular.ttf;Uni]   

`
}