const uuidv4 = require('uuid/v4');

const addPatient = async (req, res) => {
    const uuid = uuidv4();
    const { Patient } = req.models;
    const { height, weight } = req.body;
    let bodyMassIndex = null;
    if (height && weight) {
        bodyMassIndex = +(weight / Math.pow(height/100, 2)).toFixed(3);
    }
    const result = await Patient.create({ ...req.body, uuid, bodyMassIndex, refUser: req.user.payload._id });
    res.json(result);
};

const updatePatient = async (req, res) => {
    const { Patient } = req.models;
    const { height, weight } = req.body;
    let bodyMassIndex = null;
    if (height && weight) {
        bodyMassIndex = +(weight / Math.pow(height/100, 2)).toFixed(1);
    }
    const updatedParams = { ...req.body };
    if (bodyMassIndex) {
        updatedParams.bodyMassIndex = bodyMassIndex;
    }
    const result = await Patient.update({ uuid: req.params.id }, updatedParams);
    res.json(result);
};

module.exports = {
    addPatient,
    updatePatient,
};