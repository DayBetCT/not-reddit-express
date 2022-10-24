import { sequelizeConfig } from '@config/sequelizeConfig';
import { Dialect, Options, Sequelize } from 'sequelize';

type EligibleEnv = keyof typeof sequelizeConfig;

const env = (process.env.NODE_ENV || 'development') as EligibleEnv;
const config = sequelizeConfig[env];
const options: Options = {
  host: config.host,
  dialect: config.dialect as Dialect,
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  },
};

const sequelize = config.url
  ? new Sequelize(config.url, options)
  : new Sequelize(
      config.database,
      config.username,
      config.password ?? '',
      options
    );

export { Sequelize, sequelize };

// 'use strict';

// var fs = require('fs');
// var path = require('path');
// var Sequelize = require('sequelize');
// var basename = path.basename(__filename);
// var env = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../config/config.json')[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//     );
//   })
//   .forEach((file) => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
