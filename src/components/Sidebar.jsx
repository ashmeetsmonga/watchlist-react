import React from "react";

const Sidebar = () => {
	return (
		<aside className='w-1/4 h-full flex flex-col items-center p-8 bg-black outline'>
			<h1 className='text-5xl text-primary font-extrabold'>WatchLists</h1>
			<input type='text' />
		</aside>
	);
};

export default Sidebar;
