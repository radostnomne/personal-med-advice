const mongoose = require("mongoose");

const { Schema, SchemaTypes: Types } = mongoose;

const habitSchema = new Schema({
    type: { type: String, required: true },
    isExist: { type: Boolean, required: true },
});

const patientSchema = new Schema({
    uuid: { type: String, required: true, unique: true },
    name: {  type: String, required: true },
    sex: { type: String, enum: ["male", "female"], required: true },
    age: { type: Number, required: true, min: 0, max: 120 },
    height: { type: Number, required: true, min: 1, max: 300 },
    weight: { type: Number, required: true, min: 1, max: 300 },
    bodyMassIndex: { type: Number, required: true },
    habits: [habitSchema],
    isDoingSports: { type: Boolean, required: true },
    highPressure: { type: Boolean, required: true },
    healthyFood: { type: Boolean, required: true },
    longStayUnderTheSun: { type: Boolean, required: true },
    highSugar: { type: Boolean, required: true },
    highCholesterol: { type: Boolean, required: true },
    unprotectedSex: { type: Boolean, required: true },
    hasVaccination: { type: Boolean, required: true },
    refUser: { type: Types.ObjectId, required: true, ref: "User" },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;