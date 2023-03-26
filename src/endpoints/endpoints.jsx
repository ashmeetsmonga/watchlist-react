export const endpoints = {
	popular: `https://api.themoviedb.org/3/movie/popular?api_key=${
		import.meta.env.VITE_TMDB_API_KEY
	}`,
};

export const getMoviePath = (url) => {
	return `https://image.tmdb.org/t/p/w500/${url}`;
};

export const getMovieDetailsUrl = (id) => {
	return `https://api.themoviedb.org/3/movie/${id}?api_key=${
		import.meta.env.VITE_TMDB_API_KEY
	}&language=en-US`;
};
