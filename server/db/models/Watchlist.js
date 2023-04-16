const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	movies: [
		{
			type: String,
		},
	],
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide User"],
	},
});

module.exports = new mongoose.model("Watchlist", WatchlistSchema);
