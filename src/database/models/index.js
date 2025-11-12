import { pathToFileURL } from 'url';
import fs from'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import process from'process';
import { fileURLToPath } from "url";
import config from "../config/config.js" 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(import.meta.url);
const env = process.env.NODE_ENV || 'development';
const configJs = config[env];
const db = {};

let sequelize;
if (configJs.use_env_variable) {
  sequelize = new Sequelize(process.env[configJs.use_env_variable], configJs);
} else {
  sequelize = new Sequelize(configJs.database, configJs.username, configJs.password, configJs);
}
//Lê todos os arquivos da pasta models
const files = fs.readdirSync(__dirname).filter(file =>{
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
  )
})
//Importa e inicializa cada modelo
for (const file of files) {
  const fileUrl = pathToFileURL(path.join(__dirname, file)).href;
  const { default: modelDefiner } = await import(fileUrl);;
  const model = modelDefiner(sequelize, DataTypes);
  db[model.name] = model;
}

//Executa associações, se existirem
for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
