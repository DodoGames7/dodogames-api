module.exports = {
  path: "/fun/reverse",
  code: `$send[200;json;{
  text: '$getData[data.text]'
  }]
  $request[https://api.miduwu.ga/json/reverse?text=$getQuery[text]]
  $if[$getQuery[text]==undefined;400;{
error: 'Missing query parameter called text.'
}]`
}