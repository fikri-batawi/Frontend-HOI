module.exports = {
  HOST: "hoi-toy.c51a1p5uvmmq.ap-southeast-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "postgres123",
  DB: "hoitest",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};