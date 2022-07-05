module.exports = {
  path: "/fun/reverse",
  code: `$send[200;json;{
  text: '$jsEval[String.prototype.reverse = function () {
    return this.split('').reverse().join('$getQuery[text]');
}
]'
}]
  $if[$getQuery[text]==undefined;400;{
error: 'Missing query parameter called text.'
}]`
}