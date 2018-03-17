const { Router } = require("express");
const { createUser, login } = require("./auth.controller");

const router = Router();

router.post("/registration", createUser);
router.post("/auth", login);

module.exports = router;