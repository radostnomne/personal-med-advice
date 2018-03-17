const crypto = require('crypto');

const capitalizeFirstSymbol = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createSHA256Hash = (string) => crypto.createHash('sha256').update(string).digest('base64');

module.exports = {
    capitalizeFirstSymbol,
    createSHA256Hash,
};