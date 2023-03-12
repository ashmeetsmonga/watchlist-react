import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />

			<main>
				<Hero />
			</main>
		</div>
	);
};

export default Home;
