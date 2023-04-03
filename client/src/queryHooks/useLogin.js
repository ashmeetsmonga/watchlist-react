import { useMutation } from "react-query";
import axios from "axios";

export const useLogin = () => {
	return useMutation(
		async ({ email, password }) => {
			const { data } = await axios.post("http://localhost:5000/api/auth/login", {
				email,
				password,
			});
			return data;
		},
		{
			onSuccess: (data) => {
				localStorage.setItem("movie-watchlist-name", data.name);
				localStorage.setItem("movie-watchlist-token", data.token);
			},
			onError: (error) => {
				console.log("error", error);
			},
		}
	);
};
