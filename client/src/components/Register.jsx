import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../queryHooks/useRegister";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const { mutate: registerUserMutation, isError, isSuccess } = useRegister();

	useEffect(() => {
		if (isSuccess) navigate("/");
	}, [isSuccess]);

	const handleSubmit = (e) => {
		e.preventDefault();
		registerUserMutation({ name, email, password });
	};

	return (
		<div className='w-full flex flex-col gap-8 justify-center items-center outline outline-white'>
			<h1 className='text-5xl text-primary font-extrabold'>Register</h1>
			<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-1'>
					<label className='text-white text-xl'>Name *</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='px-4 py-2 text-white text-2xl bg-transparent border border-white rounded-md outline-none focus:outline-none'
						type='text'
					/>
				</div>
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
					Create Profile
				</button>
			</form>
		</div>
	);
};

export default Register;
