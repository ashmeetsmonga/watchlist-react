const User = require("../db/models/User");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/BadRequestError");
const UnAuthorizedError = require("../errors/UnAuthorizedError");

const register = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		throw new BadRequestError("Please enter name, email and password");

	const user = await User.create({ name, email, password });

	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({ name, token });
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) throw new BadRequestError("Please enter email and password");

	const user = await User.findOne({ email });
	if (!user) throw new UnAuthorizedError("Incorrect Email");

	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) throw new UnAuthorizedError("Incorrect Password");

	const token = user.createJWT();
	res.status(StatusCodes.OK).json({ name: user.name, token });
};

module.exports = { register, login };
