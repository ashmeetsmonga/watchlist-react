import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { getMovieDetailsUrl } from "../endpoints/endpoints";

const MovieDetails = ({ movieId }) => {
	const { data, isLoading, isError } = useQuery(movieId, async () => {
		const url = getMovieDetailsUrl(movieId);
		const { data } = await axios.get(url);
		console.log(data);
		return data;
	});

	return <div>MovieDetails</div>;
};

export default MovieDetails;
