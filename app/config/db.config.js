module.exports = {
  HOST: process.env.PG_HOST,
  USER: "postgres",
  PASSWORD: "password",
  DB: "mytest",
  PORT: process.env.PG_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
