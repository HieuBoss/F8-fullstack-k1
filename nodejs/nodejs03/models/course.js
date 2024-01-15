"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsToMany(models.User, {
        through: "users_courses",
        foreignKey: "course_id",
        as: "users",
      });
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      prices: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "courses",
      createdAt: "created_at",
      updatedAt: "update_at",
    }
  );
  return Course;
};
