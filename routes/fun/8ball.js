module.exports = {
    path: '/8ball',
    code: `$send[200;json;{
    answer: $random[yes;no;maybe]
    }]`
  }