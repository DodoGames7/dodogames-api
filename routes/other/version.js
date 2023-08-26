module.exports = {
  path: '/dodogames/version',
  code: `$send[200;json;{
  version: '1.0.5',
  fixes: 'Fixed owoify endpoint parameter error',
  new: 'Currently none, this is a minor update.',
  type: 'stable'
  }]`
}
