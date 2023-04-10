import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { axiosHeader } from "../configs/axiosHeader";
import { endpoints } from "../endpoints/endpoints";

const CreateNewList = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const queryClient = useQueryClient();
	const {
		mutate: addNewWatchlistMutation,
		isLoading,
		isError,
	} = useMutation(
		async ({ name, description }) => {
			const { data } = axios.post(endpoints.createWatchlist, { name, description }, axiosHeader);
			return data;
		},
		{
			onSuccess: async (data) => {
				console.log("Create new watchlist success");
				await queryClient.invalidateQueries("watchlists");
			},
		}
	);

	const addNewWatchlist = () => {
		addNewWatchlistMutation({ name, description });
	};

	return (
		<div className='flex flex-col gap-12 w-full p-8 mt-8 md:mt-0'>
			<h2 className='text-white text-4xl'>Create a New WatchList</h2>
			<div className='w-full flex flex-col gap-8'>
				<div className='w-full flex flex-col gap-2'>
					<p className='text-white text-lg'>Name</p>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='bg-black px-4 py-2 border text-white outline-none border-gray rounded-lg w-full text-xl placeholder:text-gray'
					/>
				</div>
				<div className='w-full flex flex-col gap-2'>
					<p className='text-white text-lg'>Description</p>
					<input
						type='text'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='bg-black px-4 py-2 border text-white outline-none border-gray rounded-lg w-full text-xl placeholder:text-gray'
					/>
				</div>
			</div>
			<button
				className='w-[15rem] font-bold p-3 bg-primary text-black text-xl rounded-md'
				onClick={addNewWatchlist}
			>
				Create Watchlist
			</button>
		</div>
	);
};

export default CreateNewList;
