module.exports = {
  path: '/dodogames/version',
  code: `$send[200;json;{
  version: '1.0.4',
  fixes: 'Fixed simp and wanted endpoint including color endpoint as well',
  new: 'Added 8ball and randomtopic endpoint',
  type: 'stable'
  }]`
}