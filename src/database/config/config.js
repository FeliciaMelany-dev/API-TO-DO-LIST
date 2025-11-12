import dotenv from "dotenv";

dotenv.config();

export default{
  development: {
    dialect: "sqlite",
    storage: process.env.SQLITE_STORAGE || "./database.sqlite"  
  },
  
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
