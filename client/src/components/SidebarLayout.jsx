import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }) => {
	console.log("Sidebar Layout");
	return (
		<>
			<Sidebar />
			<div className='w-full lg:w-[calc(100%-400px)] lg:ml-auto'>{children}</div>
		</>
	);
};

export default SidebarLayout;
