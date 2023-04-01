import React from "react";

const Search = () => {
	return (
		<div className='w-full flex flex-col gap-4 md:flex-row'>
			<input
				type='text'
				placeholder='Search for movies by title'
				className='w-full p-3 text-lg bg-darkGray text-white border border-gray placeholder:text-gray rounded-lg outline-none'
			/>
			<button className='px-5 py-2 text-lg bg-primary text-black rounded-lg'>Search</button>
		</div>
	);
};

export default Search;
