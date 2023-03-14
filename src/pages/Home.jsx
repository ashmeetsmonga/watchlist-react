import React from "react";
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col gap-8 w-full h-full p-8'>
			<Hero />
			<Search />
			<PopularMovies />
		</div>
	);
};

export default Home;
