import React from "react";
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col gap-8 w-full p-8 mt-8 md:mt-0'>
			<Hero />
			<Search />
			<PopularMovies />
		</div>
	);
};

export default Home;
