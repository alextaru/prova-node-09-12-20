module.exports = {
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS  || 'mysecretpassword',
    database: process.env.DB_NAME  || 'login',
    port: Number(process.env.DB_PORT || '5432'),
    logging: false,
    define: {
    timestamps: true,
  },
};