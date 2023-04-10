export const endpoints = {
	popular: `https://api.themoviedb.org/3/movie/popular?api_key=${
		import.meta.env.VITE_TMDB_API_KEY
	}`,
	watchlists: "http://localhost:5000/api/watchlist/get-all-watchlists",
	createWatchlist: "http://localhost:5000/api/watchlist/create-watchlist",
};

export const getMoviePath = (url) => {
	return `https://image.tmdb.org/t/p/w500/${url}`;
};

export const getMovieDetailsUrl = (id) => {
	return `https://api.themoviedb.org/3/movie/${id}?api_key=${
		import.meta.env.VITE_TMDB_API_KEY
	}&language=en-US`;
};
