const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  return rewireSass(config, env);
};
