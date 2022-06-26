module.exports = {
  path: '/fun/fact',
  code: `$send[200;json;{
  text: '$getData[data.fact]'
  }]' 
$request[https://api.popcat.xyz/fact]`
}