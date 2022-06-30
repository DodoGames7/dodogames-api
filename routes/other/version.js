module.exports = {
  path: '/dodogames/version',
  code: `$send[200;json;{
  api-info: [
  version: '1.0.3',
  fixes: 'none',
  new: 'added image wanted endpoint\n data => owoified in /text/owoify endpoint',
  type: 'stable'
  ]
  }]`
}