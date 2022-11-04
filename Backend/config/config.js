const { PORT, MONGO_URL, JWT_SECRET } = process.env;

module.exports = {
    PORT: PORT,
    URL: MONGO_URL,
    JWTSECREATEKEY: JWT_SECRET
};