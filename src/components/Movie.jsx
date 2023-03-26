import React from "react";
import { BsPlus } from "react-icons/bs";
import { getMoviePath } from "../endpoints/endpoints";

const Movie = ({ movie }) => {
	return (
		<div className='w-full md:w-[300px] relative flex flex-col gap-2 cursor-pointer transition-transform hover:scale-105'>
			<img src={getMoviePath(movie.poster_path)} alt={movie.original_title} />
			<button className='absolute top-2 left-2'>
				<BsPlus className='text-gray w-10 h-10 transition-transform hover:text-white hover:scale-150' />
			</button>
		</div>
	);
};

export default Movie;
