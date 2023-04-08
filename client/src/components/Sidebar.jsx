import React, { useState } from "react";
import { AiOutlineHome, AiOutlineHistory, AiOutlineFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useQuery } from "react-query";
import axios from "axios";
import { endpoints } from "../endpoints/endpoints";
import { axiosHeader } from "../configs/axiosHeader";

const Sidebar = () => {
	const [display, setDisplay] = useState("hidden");

	const handleMenuToggle = () => {
		setDisplay((prev) => (prev === "hidden" ? "flex" : "hidden"));
	};

	const {
		data: watchlistsData,
		isLoading,
		isError,
	} = useQuery("watchlists", async () => {
		const { data } = await axios.get(endpoints.watchlists, axiosHeader);
		return data;
	});

	return (
		<>
			{display === "hidden" && (
				<MdMenu
					className='w-10 h-10 text-primary absolute right-8 top-2 cursor-pointer lg:hidden'
					onClick={handleMenuToggle}
				/>
			)}
			{display === "flex" && (
				<MdClose
					className='w-10 h-10 text-primary absolute right-8 top-2 cursor-pointer lg:hidden'
					onClick={handleMenuToggle}
				/>
			)}
			<aside
				className={`w-4/5 z-50 max-w-[400px] ${display} fixed h-screen flex-col gap-10 items-center p-8 bg-black lg:flex lg:w-[400px]`}
			>
				<h1 className='text-5xl text-primary font-extrabold'>WatchLists</h1>
				<input
					type='text'
					className='bg-black px-4 py-2 border text-white outline-none border-gray rounded-lg w-full text-xl placeholder:text-gray'
					placeholder='Search'
				/>
				<div className='flex flex-col w-full gap-6'>
					<Link to='/' onClick={handleMenuToggle}>
						<div className='flex items-center gap-6 p-3 bg-gray text-white text-xl w-full rounded-md'>
							<AiOutlineHome className='w-7 h-7' /> Home
						</div>
					</Link>
					<div className='flex items-center gap-6 p-3 bg-black text-white text-xl w-full rounded-md border border-gray'>
						<AiOutlineHistory className='w-7 h-7' /> History
					</div>
				</div>
				<div className='w-full'>
					<Link
						to='/create-new-list'
						className='flex justify-center items-center font-bold gap-2 p-3 bg-primary text-black text-xl w-full rounded-md border'
						onClick={handleMenuToggle}
					>
						<AiOutlineFileAdd className='w-7 h-7' /> Create Watchlist
					</Link>
				</div>
				<div className='w-full flex flex-col'>
					<div className='p-4 text-xl text-gray border-t border-gray'>My List</div>
					{watchlistsData?.map((list, idx) => {
						return (
							<div key={idx} className='px-4 py-1 text-lg text-white'>
								{list.name}
							</div>
						);
					})}
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
