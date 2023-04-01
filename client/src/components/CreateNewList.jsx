import React from "react";

const CreateNewList = () => {
	return (
		<div className='flex flex-col gap-12 w-full p-8 mt-8 md:mt-0'>
			<h2 className='text-white text-4xl'>Create a New WatchList</h2>
			<div className='w-full flex flex-col gap-8'>
				<div className='w-full flex flex-col gap-2'>
					<p className='text-white text-lg'>Name</p>
					<input
						type='text'
						className='bg-black px-4 py-2 border text-white outline-none border-gray rounded-lg w-full text-xl placeholder:text-gray'
					/>
				</div>
				<div className='w-full flex flex-col gap-2'>
					<p className='text-white text-lg'>Description</p>
					<input
						type='text'
						className='bg-black px-4 py-2 border text-white outline-none border-gray rounded-lg w-full text-xl placeholder:text-gray'
					/>
				</div>
			</div>
			<button className='w-[15rem] font-bold p-3 bg-primary text-black text-xl rounded-md'>
				Create Watchlist
			</button>
		</div>
	);
};

export default CreateNewList;
