const deepmerge = require('deepmerge');

const defaultUserConfig = require('./config/user/default.config');
const dev = require('./dev');
const build = require('./build');

module.exports = (api, options = {}) => {
  api.context.userConfig = deepmerge(defaultUserConfig, api.context.userConfig);
  const { command } = api.context;

  // set dev config
  if (command === 'dev') {
    dev(api, options);
  }

  if (command === 'build') {
    build(api, options);
  }
};
