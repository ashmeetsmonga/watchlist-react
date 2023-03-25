import React from "react";
import { getMoviePath } from "../endpoints/endpoints";

const Movie = ({ movie }) => {
	return (
		<div className='w-full md:w-[300px] flex flex-col gap-2 cursor-pointer transition-transform hover:scale-105'>
			<img src={getMoviePath(movie.poster_path)} />
		</div>
	);
};

export default Movie;
