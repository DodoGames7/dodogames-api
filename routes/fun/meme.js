module.exports = {
  path: '/fun/meme',
  code: `$send[200;json;{
  title: '$getData[data.title]'
  }]
  $request[https://www.reddit.com/r/memes/random/.json;{
  method: 'GET'
  }]
]
  `
}