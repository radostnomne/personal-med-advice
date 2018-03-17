const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("express-jwt");
const cors = require("cors");
const mongoose = require("mongoose");
const { setModels } = require("./middleware");
const patientRouter = require("./components/patient/patient.router");
const authRouter = require("./components/auth/auth.router");
const swaggerRouter = require("./components/swagger/swagger.router");
const { SECRET } = require("./utils");

mongoose.Promise = Promise;
mongoose.connection.openUri("mongodb://localhost:27017/test");

const app = express();

app
    .use(cors())
    .use(bodyParser())
    .use(setModels)
    .use(swaggerRouter)
    .use(authRouter)
    .use(jwt({ secret: SECRET }).unless({path: ["/swagger.json", "/docs"]}))
    .use(patientRouter);

module.exports = app;