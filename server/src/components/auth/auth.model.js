const mongoose = require("mongoose");
const { createSHA256Hash } = require("../../utils");

const { Schema, SchemaTypes: Types } = mongoose;

const userSchema = new Schema({
    uuid: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: "phrusers" });

userSchema.pre("save", function () {
    this.password = createSHA256Hash(this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;