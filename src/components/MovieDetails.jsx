import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { getMovieDetailsUrl, getMoviePath } from "../endpoints/endpoints";
import { Link, useParams } from "react-router-dom";

const getRuntime = (time) => {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;

	return `${hours}h ${minutes}m`;
};

const MovieDetails = () => {
	const { movieId } = useParams();
	const { data, isLoading, isError } = useQuery(movieId, async () => {
		const url = getMovieDetailsUrl(movieId);
		const { data } = await axios.get(url);
		console.log(data);
		return data;
	});

	if (isLoading) return <div className='text-white m-4 text-lg'>Loading...</div>;

	return (
		data && (
			<div className='w-full flex flex-col items-center p-8 mt-8 md:mt-0 text-white'>
				<div className='w-full flex gap-4 flex-col items-center lg:flex-row md:items-start md:gap-8'>
					<Link className='md:w-[500px]' to={data.homepage} target='_blank'>
						<img
							className='w-[370px] md:w-full rounded-md'
							src={getMoviePath(data.poster_path)}
							alt=''
						/>
					</Link>
					<div className='w-full flex flex-col items-center md:items-start'>
						<h1 className=' text-4xl font-bold'>{data.original_title}</h1>
						<p className=' text-2xl font-bold'>({data.release_date.substring(0, 4)})</p>
						<div className='flex gap-2 mt-2'>
							{data.genres.map((genre, idx) => (
								<p key={genre.id} className=''>
									{genre.name}
									{idx === data.genres.length - 1 ? "" : ","}
								</p>
							))}
						</div>
						<p>{getRuntime(data.runtime)}</p>
						{data.tagline && <p className='text-primary mt-8 text-xl italic'>{data.tagline}</p>}
						<div className='flex flex-col gap-2 mt-8 items-center md:items-start'>
							<h2 className='text-2xl font-bold'>Overview</h2>
							<p className='text-lg text-center md:text-left'>{data.overview}</p>
						</div>
						<div className='w-4/5 mt-8 md:w-[300px]'>
							<button className='flex justify-center items-center font-bold gap-2 p-3 bg-primary text-black text-xl w-full rounded-md border'>
								Add to WatchList
							</button>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		)
	);
};

export default MovieDetails;
