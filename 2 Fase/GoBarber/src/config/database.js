require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.USE,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
