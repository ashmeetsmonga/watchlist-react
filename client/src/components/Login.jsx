import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../queryHooks/useLogin";
import { toast } from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loadingToastId = useRef(null);
	const navigate = useNavigate();

	const { mutate: loginUserMutation, isError, isSuccess, isLoading } = useLogin();
	console.log("Login Route");
	useEffect(() => {
		if (isLoading) {
			loadingToastId.current = toast.loading("Logging In");
		}
		if (isSuccess) {
			toast.dismiss(loadingToastId.current);
			toast.success("Logged In successfully");
			navigate("/");
		}
		if (isError) {
			toast.dismiss(loadingToastId.current);
			toast.error("Authentication Failed");
		}
	}, [isSuccess, isLoading, isError]);

	const handleSubmit = (e) => {
		e.preventDefault();
		loginUserMutation({ email, password });
	};

	return (
		<div className='w-full flex flex-col gap-8 justify-center items-center'>
			<h1 className='text-5xl text-primary font-extrabold'>Login</h1>
			<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-1'>
					<label className='text-white text-xl'>Email *</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='px-4 py-2 text-white text-2xl bg-transparent border border-white rounded-md outline-none focus:outline-none'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label className='text-white text-xl'>Password *</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='px-4 py-2 text-white text-2xl bg-transparent border border-white rounded-md outline-none focus:outline-none'
						type='password'
					/>
				</div>
				<button
					type='submit'
					className='flex justify-center items-center font-bold p-3 mt-8 bg-primary text-black text-xl w-full rounded-md border'
				>
					Sign In
				</button>
				<button
					type='submit'
					onClick={() => navigate("/register")}
					className='flex justify-center items-center font-bold p-3 bg-primary text-black text-xl w-full rounded-md border'
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default Login;
