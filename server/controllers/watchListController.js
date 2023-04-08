const { StatusCodes } = require("http-status-codes");
const Watchlist = require("../db/models/Watchlist");

const createWatchlist = async (req, res) => {
	const { name, description } = req.body;
	const { userId } = req.user;

	const watchlist = await Watchlist.create({ name, description, createdBy: userId });

	res.status(StatusCodes.CREATED).json({ name, description });
};

const getAllWatchLists = async (req, res) => {
	const { userId } = req.user;
	console.log("here");
	const watchlists = await Watchlist.find({ createdBy: userId });
	res.status(StatusCodes.OK).json(watchlists);
};

module.exports = { createWatchlist, getAllWatchLists };
