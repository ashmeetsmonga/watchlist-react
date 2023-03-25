import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import endpoints from "../endpoints/endpoints";
import Movie from "./Movie";

const PopularMovies = () => {
	const { data, isLoading, isError } = useQuery("popular-movies", async () => {
		const { data } = await axios.get(endpoints.popular);
		console.log("Popular movies", data);
		return data;
	});

	return (
		<div className='w-full flex flex-col outline outline-white'>
			<h2 className='text-3xl text-white'>Popular Movies right now</h2>
			{data && (
				<div className='w-full p-4 flex flex-col md:flex-row gap-4'>
					{data.results.map((movie) => (
						<Movie key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</div>
	);
};

export default PopularMovies;
