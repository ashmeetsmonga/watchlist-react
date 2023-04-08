const express = require("express");
const { createWatchlist, getAllWatchLists } = require("../controllers/watchListController");

const watchlistRouter = express.Router();

watchlistRouter.route("/create-watchlist").post(createWatchlist);
watchlistRouter.route("/get-all-watchlists").get(getAllWatchLists);

module.exports = { watchlistRouter };
