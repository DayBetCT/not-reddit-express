import { DataTypes } from 'sequelize';
import { sequelize } from '@models';

export const Post = sequelize.define('Post', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
