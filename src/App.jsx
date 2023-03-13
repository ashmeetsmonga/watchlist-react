import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
	return (
		<div className='w-screen h-screen flex bg-darkGray'>
			<Sidebar />
			<Home />
		</div>
	);
}

export default App;
