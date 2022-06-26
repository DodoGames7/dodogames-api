module.exports = {
  path: '/fun/fact',
  code: `$send[$getData[data.fact]] 
$request[https://api.popcat.xyz/fact]`
}