import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CreateNewList from "./components/CreateNewList";

function App() {
	return (
		<div className='w-screen h-screen flex bg-darkGray'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create-new-list' element={<CreateNewList />} />
			</Routes>
		</div>
	);
}

export default App;
