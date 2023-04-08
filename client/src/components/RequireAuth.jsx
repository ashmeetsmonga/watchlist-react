import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const RequireAuth = () => {
	const token = localStorage.getItem("movie-watchlist-token");
	if (token !== null) return <Outlet />;
	else return <Navigate to={"/login"} />;
	// return token !== null ? children :
};

export default RequireAuth;
