import React from "react";

const Register = () => {
	return (
		<div className='w-full flex justify-center items-center outline outline-white'>
			<form action=''>
				<label>Name</label>
				<input type='text' />
				<label>Email</label>
				<input type='text' />
				<label>Password</label>
				<input type='text' />
			</form>
		</div>
	);
};

export default Register;
