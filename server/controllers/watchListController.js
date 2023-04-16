const { StatusCodes } = require("http-status-codes");
const Watchlist = require("../db/models/Watchlist");
const BadRequestError = require("../errors/BadRequestError");

const createWatchlist = async (req, res) => {
	const { name, description } = req.body;
	const { userId } = req.user;

	if (!name) throw new BadRequestError("Please provide name");

	const watchlist = await Watchlist.create({ name, description, createdBy: userId });

	res.status(StatusCodes.CREATED).json({ name, description });
};

const getAllWatchLists = async (req, res) => {
	const { userId } = req.user;
	const watchlists = await Watchlist.find({ createdBy: userId });
	res.status(StatusCodes.OK).json(watchlists);
};

const addMovieToWatchlist = async (req, res) => {
	const { movieId, watchlistId } = req.body;
	await Watchlist.updateOne({ _id: watchlistId }, { $push: { movies: movieId } });
	const watchlist = await Watchlist.find({ _id: watchlistId });
	res.status(StatusCodes.OK).json(watchlist);
};

module.exports = { createWatchlist, getAllWatchLists, addMovieToWatchlist };
