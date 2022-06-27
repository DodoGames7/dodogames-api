module.exports = {
  path: '/fun/meme',
  code: `$send[200;json;{
  title: '$getData[data.title]',
  image: '$getData[data.url]'
 
  $request[https://www.reddit.com/r/memes/random/.json;{
  method: 'GET',
  data: '$jsEval[const data = json[0].data.children[0].data;]'
  };Math.random().toString()]
  }]
]
  `
}