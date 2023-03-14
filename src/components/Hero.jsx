import React from "react";

const Hero = () => {
	return (
		<div className='w-full flex flex-col gap-4 p-8 rounded-md border border-primary bg-mediumGray'>
			<h1 className='text-5xl text-white'>
				Welcome to <span className='text-primary font-bold'>WatchList</span>
			</h1>
			<div className='flex flex-col gap-2'>
				<p className='text-lg text-white'>
					Browse movies, add them to watchlists and share them with friends.
				</p>
				<p className='text-lg text-white'>
					Just click the to add a movie, the poster to see more details or to mark the movie as
					watched.
				</p>
			</div>
		</div>
	);
};

export default Hero;
