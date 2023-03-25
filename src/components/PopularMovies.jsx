import React from "react";
import endpoints from "../endpoints/endpoints";

const PopularMovies = () => {
	return (
		<div className='w-full flex flex-col outline outline-white'>
			<h2 className='text-3xl text-white'>Popular Movies right now</h2>
			<div className='text-white'>{endpoints.popular}</div>
		</div>
	);
};

export default PopularMovies;
