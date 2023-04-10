import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { endpoints } from "../endpoints/endpoints";
import { axiosHeader } from "../configs/axiosHeader";

export const useAddNewWatchlistMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ name, description }) => {
			const { data } = axios.post(endpoints.createWatchlist, { name, description }, axiosHeader);
			return data;
		},
		{
			onSuccess: async (data) => {
				console.log("Create new watchlist success");
				await queryClient.invalidateQueries("watchlists");
			},
			onError: (error) => {
				console.log("error", error);
			},
		}
	);
};
