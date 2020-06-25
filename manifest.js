module.exports = {
  version: '1.2.3',
  init: (pluginContext) => {
     pluginContext.registerPolicy(require('./policies/body-parser.policy'))
  },
  policies: ['body-parser'],
  schema: {
    $id: 'N/A',
  }
}
