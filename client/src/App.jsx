import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNewList from "./components/CreateNewList";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import SidebarLayout from "./components/SidebarLayout";

function App() {
	return (
		<div className='w-screen min-h-screen flex bg-darkGray'>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route element={<RequireAuth />}>
					<Route
						path='/'
						exact
						element={
							<SidebarLayout>
								<Home />
							</SidebarLayout>
						}
					/>
					<Route
						path='/create-new-list'
						element={
							<SidebarLayout>
								<CreateNewList />
							</SidebarLayout>
						}
					/>
					<Route
						path='/movie-details/:movieId'
						element={
							<SidebarLayout>
								<MovieDetails />
							</SidebarLayout>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
