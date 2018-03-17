const uuidv4 = require('uuid/v4');
const { generateJWTWithBearer } = require("../../utils");
const { createSHA256Hash } = require("../../utils");

const createUser = async (req, res) => {
    const uuid = uuidv4();
    const { Auth: User } = req.models;
    try {
        const user = await User.create({ ...req.body, uuid });
        const token = generateJWTWithBearer(user);

        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.errmsg });
    }
};

const login = async (req, res) => {
    const { Auth: User } = req.models;
    const { login, password } = req.body;
    const searchParams = {
        login,
        password: createSHA256Hash(password),
    };
    const user = await User.findOne(searchParams);
    if (user) {
        const token = generateJWTWithBearer(user);
        res.json({ token });
    } else {
        res.status(404).json({ error: "User not found" });
    }
};

module.exports = {
    createUser,
    login,
};