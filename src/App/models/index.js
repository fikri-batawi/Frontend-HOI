const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.game = require("./game.model")(sequelize, Sequelize);

db.game.belongsToMany(db.user, {
  through: "user_game",
  as: "users",
  foreignKey: "game_id",
});
db.user.belongsToMany(db.game, {
  through: "user_game",
  as: "games",
  foreignKey: "user_id",
});

module.exports = db;