import React from "react";
import { AiOutlineHome, AiOutlineHistory } from "react-icons/ai";

const Sidebar = () => {
	return (
		<aside className='w-1/4 h-full flex flex-col gap-8 items-center p-8 bg-black outline'>
			<h1 className='text-5xl text-primary font-extrabold'>WatchLists</h1>
			<input
				type='text'
				className='bg-black px-4 py-2 border border-gray rounded-lg w-full text-xl placeholder:text-gray'
				placeholder='Search'
			/>
			<div className='flex items-center gap-6 p-3 bg-gray text-white text-xl w-full rounded-md'>
				<AiOutlineHome className='w-7 h-7' /> Home
			</div>
			<div className='flex items-center gap-6 p-3 bg-black text-white text-xl w-full rounded-md'>
				<AiOutlineHistory className='w-7 h-7' /> History
			</div>
		</aside>
	);
};

export default Sidebar;
