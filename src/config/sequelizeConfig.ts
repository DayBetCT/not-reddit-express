import { env } from "@config/baseConfig";

export const sequelizeConfig = {
  development: {
    url: "",
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
  },
  test: {
    url: "",
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
  },
  production: {
    url: "",
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
