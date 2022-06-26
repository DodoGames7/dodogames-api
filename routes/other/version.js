module.exports = {
  path: 'api/version',
  code: `$send[200;json;{
  'version': 'V1.0.2',
  'fixes': 'none',
  'new' 'added some endpoints to route other category'
  }]`
}