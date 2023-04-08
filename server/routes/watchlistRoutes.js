const express = require("express");
const { createWatchlist } = require("../controllers/watchListController");

const watchlistRouter = express.Router();

watchlistRouter.route("/create-watchlist").post(createWatchlist);

module.exports = { watchlistRouter };
