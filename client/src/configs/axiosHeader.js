export const axiosHeader = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem("movie-watchlist-token")}`,
	},
};
