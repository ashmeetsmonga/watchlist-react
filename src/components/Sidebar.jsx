import React from "react";

const Sidebar = () => {
	return (
		<aside className='w-1/4 h-full flex flex-col gap-8 items-center p-8 bg-black outline'>
			<h1 className='text-5xl text-primary font-extrabold'>WatchLists</h1>
			<input
				type='text'
				className='bg-black px-4 py-2 border border-gray rounded-lg w-4/5 text-xl placeholder:text-gray'
				placeholder='Search'
			/>
		</aside>
	);
};

export default Sidebar;
