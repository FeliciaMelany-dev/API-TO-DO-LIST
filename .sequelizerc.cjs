const path = require('path');

module.exports = {
  config: path.resolve('src/database/config', 'config.js'),
  modelsPath: path.resolve('src/database/models'),
  migrationsPath: path.resolve('src/database/migrations'),
  seedersPath: path.resolve('src/database/seeders')
};
