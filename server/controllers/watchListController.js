const { StatusCodes } = require("http-status-codes");
const Watchlist = require("../db/models/Watchlist");

const createWatchlist = async (req, res) => {
	const { name, description } = req.body;
	const { userId } = req.user;

	const watchlist = Watchlist.create({ name, description, createdBy: userId });

	res.status(StatusCodes.CREATED).json({ name, description });
};

module.exports = { createWatchlist };
