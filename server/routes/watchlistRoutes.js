const express = require("express");
const {
	createWatchlist,
	getAllWatchLists,
	addMovieToWatchlist,
} = require("../controllers/watchListController");

const watchlistRouter = express.Router();

watchlistRouter.route("/create-watchlist").post(createWatchlist);
watchlistRouter.route("/get-all-watchlists").get(getAllWatchLists);
watchlistRouter.route("/add-movie-to-watchlist").post(addMovieToWatchlist);

module.exports = { watchlistRouter };
