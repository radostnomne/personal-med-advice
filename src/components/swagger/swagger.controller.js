const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const swaggerSpec = async (req, res) => {
    const swaggerSchema = swaggerJSDoc({
        swaggerDefinition: {
            swagger: "1.0",
            info: {
                title: "#Tech4LifeHack",
                version: "1.0",
                description: "API",
            },
            host: "localhost:3000",
            basePath: "/",
            securityDefinitions: {
                Bearer: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization"
                }
            },
        },
        apis: [path.join(__dirname, "../**/*controller/js")],
    });
};

module.exports = {
    swaggerSpec,
};