'use strict';
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Task extends Model {}
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    status:{
      type: DataTypes.ENUM("pendente", "a_fazer", "concluído"),
      defaultValue: "a_fazer"
    },
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  });
  return Task;
};