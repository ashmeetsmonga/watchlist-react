import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const token = localStorage.getItem("movie-watchlist-token");
	return token ? children : <Navigate to={"/login"} />;
};

export default RequireAuth;
