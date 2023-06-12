module.exports = {
    path: '/fun/8ball',
    code: `$send[200;json;{
    8ball: $random[yes;no;maybe]
    }]`
  }