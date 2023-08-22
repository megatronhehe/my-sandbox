import React, { useState } from "react";

const Validation = () => {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [errorMessage, setErrorMessage] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const isFormValid =
		form.username.length > 0 &&
		form.email.length > 0 &&
		form.password.length > 0 &&
		form.confirmPassword.length > 0 &&
		errorMessage.username.length === 0 &&
		errorMessage.email.length === 0 &&
		errorMessage.password.length === 0 &&
		errorMessage.confirmPassword.length === 0;

	const validateUsername = (value) => {
		if (/^[a-zA-Z0-9]{6,}$/.test(value)) {
			return "";
		}
		return "Username should only contain letters and numbers and have a minimum length of 6 characters.";
	};

	const validateEmail = (value) => {
		if (/^\S+@\S+\.\S+$/.test(value)) {
			return "";
		}
		return "Please enter a valid email address.";
	};

	const validatePassword = (value) => {
		if (/(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/.test(value)) {
			return "";
		}
		return "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.";
	};

	const validateConfirmPassword = (value) => {
		if (value === form.password) {
			return "";
		}
		return "Password don't match.";
	};

	const handleForm = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		setErrorMessage((prev) => ({
			...prev,
			[name]:
				name === "username"
					? validateUsername(value)
					: name === "email"
					? validateEmail(value)
					: name === "password"
					? validatePassword(value)
					: name === "confirmPassword"
					? validateConfirmPassword(value)
					: "",
		}));
	};

	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-2xl">Validation</h1>
			<form className="flex flex-col gap-2">
				<label htmlFor="username">username</label>
				<input
					id="username"
					name="username"
					type="text"
					value={form.username}
					onChange={handleForm}
					placeholder="username"
					className="p-4 bg-gray-100 border outline-none rounded-xl focus:bg-white focus:border-blue-300"
					required
				/>
				<span className="h-10 text-sm text-red-500 ">
					{form.username === "" ? "" : errorMessage.username}
				</span>

				<label htmlFor="email">email</label>
				<input
					id="email"
					name="email"
					type="text"
					value={form.email}
					onChange={handleForm}
					placeholder="email"
					className="p-4 bg-gray-100 border outline-none rounded-xl focus:bg-white focus:border-blue-300"
					required
				/>
				<span className="h-10 text-sm text-red-500 ">
					{form.email === "" ? "" : errorMessage.email}
				</span>

				<label htmlFor="password">password</label>
				<input
					id="password"
					name="password"
					type="text"
					value={form.password}
					onChange={handleForm}
					placeholder="password"
					className="p-4 bg-gray-100 border outline-none rounded-xl focus:bg-white focus:border-blue-300"
					required
				/>
				<span className="h-10 text-sm text-red-500 ">
					{form.password === "" ? "" : errorMessage.password}
				</span>

				<label htmlFor="confirmPassword">confirm password</label>
				<input
					id="confirmPassword"
					name="confirmPassword"
					type="text"
					value={form.confirmPassword}
					onChange={handleForm}
					placeholder="confirm password"
					className="p-4 bg-gray-100 border outline-none rounded-xl focus:bg-white focus:border-blue-300"
					required
				/>
				<span className="h-10 text-sm text-red-500 ">
					{form.confirmPassword === "" ? "" : errorMessage.confirmPassword}
				</span>

				<button
					disabled={!isFormValid}
					className={`px-4 py-2 font-semibold text-white  rounded-full ${
						!isFormValid ? "bg-gray-300" : "bg-blue-300"
					}`}
				>
					submit
				</button>
			</form>
		</main>
	);
};

export default Validation;
