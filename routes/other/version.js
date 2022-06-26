module.exports = {
  path: '/dodogames/version',
  code: `$send[200;json;{
  api-info: [
  version: '1.0.2',
  fixes: 'none',
  new: 'added some endpoints to route other category',
  type: 'stable'
  ]
  }]`
}