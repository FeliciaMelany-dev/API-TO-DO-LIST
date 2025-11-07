const path = require('path');

module.exports = {
  config: path.resolve('src/config', 'config.json'),
  modelsPath: path.resolve('src/models'),
  migrationsPath: path.resolve('src/migrations'),
  seedersPath: path.resolve('src/seeders')
};
