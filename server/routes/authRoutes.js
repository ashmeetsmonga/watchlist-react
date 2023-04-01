const express = require("express");
const { register } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.route("/register").post(register);

module.exports = { authRouter };
