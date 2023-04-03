import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	return children;
};

export default RequireAuth;
