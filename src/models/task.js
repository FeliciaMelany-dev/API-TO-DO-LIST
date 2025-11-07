'use strict';
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  });
  return Task;
};