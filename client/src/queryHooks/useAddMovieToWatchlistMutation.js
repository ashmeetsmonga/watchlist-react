import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { endpoints } from "../endpoints/endpoints";

export const useAddMovieToWatchlistMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ movieId, watchlistId }) => {
			const { data } = await axios.post(
				endpoints.addMovieToWatchlist,
				{ movieId, watchlistId },
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
				console.log("Add movie to watchlist success");
				await queryClient.refetchQueries("watchlists");
			},
			onError: (error) => {
				console.log("error", error);
			},
		}
	);
};
