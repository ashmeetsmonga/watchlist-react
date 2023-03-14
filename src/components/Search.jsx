import React from "react";

const Search = () => {
	return (
		<div className='w-full flex gap-2'>
			<input
				type='text'
				className='w-full p-3 text-lg bg-darkGray text-white border border-gray rounded-lg outline-none'
			/>
			<button className='px-3 py-2 text-lg bg-primary text-white rounded-lg'>Search</button>
		</div>
	);
};

export default Search;
