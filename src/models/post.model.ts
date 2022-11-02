import { sequelize } from "@models/squelize.init";
import { STRING, NUMBER } from "sequelize";

export const Post = sequelize.define(
  "Post",
  {
    id: {
      type: NUMBER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
  }
);
