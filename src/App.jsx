import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNewList from "./components/CreateNewList";
import MovieDetails from "./components/MovieDetails";

function App() {
	return (
		<div className='w-screen h-screen flex bg-darkGray overflow-x-hidden'>
			<Sidebar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/create-new-list' element={<CreateNewList />} />
				<Route path='/movie-details/:movieId' element={<MovieDetails />} />
			</Routes>
		</div>
	);
}

export default App;
