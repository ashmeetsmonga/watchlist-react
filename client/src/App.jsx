import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNewList from "./components/CreateNewList";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
	return (
		<div className='w-screen min-h-screen flex bg-darkGray'>
			<RequireAuth>
				<Sidebar />
			</RequireAuth>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/'
					exact
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				/>
				<Route
					path='/create-new-list'
					element={
						<RequireAuth>
							<CreateNewList />
						</RequireAuth>
					}
				/>
				<Route
					path='/movie-details/:movieId'
					element={
						<RequireAuth>
							<MovieDetails />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
