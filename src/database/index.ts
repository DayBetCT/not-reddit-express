import { env } from '../config';
import { Dialect, Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT as Dialect,
    pool: {
      max: env.POOL_MAX,
      min: env.POOL_MIN,
      acquire: env.POOL_ACQUIRE,
      idle: env.POOL_IDLE,
    },
  }
);
