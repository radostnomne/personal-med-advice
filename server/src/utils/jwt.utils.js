const jwt = require("jsonwebtoken");

const SECRET = "#Tech4LifeHack";

const generateJWTToken = (payload) => jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 60) }, SECRET);

const generateJWTWithBearer = (payload) => "Bearer " + generateJWTToken(payload);

module.exports = {
    SECRET,

    generateJWTToken,
    generateJWTWithBearer,
};