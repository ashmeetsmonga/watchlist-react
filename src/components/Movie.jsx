import React from "react";
import { getMoviePath } from "../endpoints/endpoints";

const Movie = ({ movie }) => {
	return (
		<div className='w-full md:w-[300px] flex flex-col gap-2'>
			<img src={getMoviePath(movie.poster_path)} />
			<h2 className='text-white text-xl'>{movie.original_title}</h2>
		</div>
	);
};

export default Movie;
