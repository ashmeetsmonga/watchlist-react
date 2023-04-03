import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const token = localStorage.getItem("movie-watchlist-token");
	return token !== null ? children : <Navigate to='/login' />;
};

export default RequireAuth;
