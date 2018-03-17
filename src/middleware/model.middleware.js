const fs = require('fs');
const path = require("path");
const recursive = require("recursive-readdir");

const { capitalizeFirstSymbol } = require("../utils");

const getModels = () => {
    return new Promise((resolve, reject) => {
        recursive(path.join(__dirname, "../components"), (err, files) => {
            if (err) reject(err);

            const models = {};

            files
                .filter((filePath) => filePath.includes('model'))
                .forEach((filePath) => {
                    const pathes = filePath.split("/");
                    const fieldName = capitalizeFirstSymbol(pathes[pathes.length -2]);
                    models[fieldName] = require(filePath);
                });

            resolve(models);
        });
    });
};

const setModels = async (req, res, next) => {
    const models = await getModels();
    req.models = models;
    next();
};


module.exports = { getModels, setModels };