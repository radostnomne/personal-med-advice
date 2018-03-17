const express = require("express");
const { Router } = require("express");
const path = require("path");
const { swaggerSpec } = require("./swagger.controller");

const router = Router();

router.get("/swagger.json", swaggerSpec);
router.get("/docs", express.static(path.join(__dirname, "../../public/swagger")))

module.exports = router;