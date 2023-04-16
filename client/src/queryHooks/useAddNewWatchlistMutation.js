import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { endpoints } from "../endpoints/endpoints";
import { axiosHeader } from "../configs/axiosHeader";

export const useAddNewWatchlistMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ name, description }) => {
			console.log("token, ", localStorage.getItem("movie-watchlist-token"));
			const { data } = await axios.post(
				endpoints.createWatchlist,
				{ name, description },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("movie-watchlist-token")}`,
					},
				}
			);
			return data;
		},
		{
			onSuccess: async (data) => {
				console.log("Create new watchlist success");
				await queryClient.refetchQueries("watchlists");
			},
			onError: (error) => {
				console.log("error", error);
			},
		}
	);
};
