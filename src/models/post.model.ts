import { sequelize } from '@models/squelize.init';
import { DataTypes } from 'sequelize';

export const Post = sequelize.define('Post', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
