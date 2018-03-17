const { Router } = require("express");
const { addPatient, updatePatient } = require("./patient.controller");
const router = Router();

router.post("/patient", addPatient);
router.patch("/patient/:id", updatePatient);

module.exports = router;