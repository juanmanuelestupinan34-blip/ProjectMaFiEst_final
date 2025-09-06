module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'postgres://user:password@localhost:5432/mafiest',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
    NODE_ENV: process.env.NODE_ENV || 'development',
};