const User = require("../db/models/User");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/BadRequestError");

const register = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		throw new BadRequestError("Please enter name, email and password");

	const user = await User.create({ name, email, password });

	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({ name, token });
};

module.exports = { register };
