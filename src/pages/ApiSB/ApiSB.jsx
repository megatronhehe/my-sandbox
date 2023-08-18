import React, { useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

const ApiSB = () => {
	const [charData, setCharData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const initial_char_form = {
		id: uuid(),
		name: "",
		faction: "",
		altMode: "",
	};

	const [newCharForm, setNewCharForm] = useState(initial_char_form);

	useEffect(() => {
		fetchChar();
	}, []);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setNewCharForm((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	};

	const fetchChar = () => {
		setError("");
		setIsLoading(true);
		fetch("http://localhost:8000/characters")
			.then((res) => {
				if (!res.ok) {
					setError(`${res.status} || ${res.statusText}`);
				}
				return res.json();
			})
			.then((data) => setCharData(data))
			.catch((err) => {
				console.log(err);
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/characters", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newCharForm),
		}).then(() => {
			console.log("new character added");
			setNewCharForm(initial_char_form);
		});
	};

	const charCardElement =
		charData.length > 0 &&
		charData.map((char) => {
			const { id, name, faction, altMode } = char;
			return (
				<li key={id} className="p-4 bg-white rounded-xl">
					<h2 className="pb-2 mb-2 border-b">{name}</h2>
					<p className="text-xs">
						{name} is a member of {faction}. {name} can turn into a {altMode}
					</p>
				</li>
			);
		});

	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-2xl">Handle API</h1>

			<section className="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
				<h2 className="">Fetch Characters {"(json server)"}</h2>
				<button
					onClick={fetchChar}
					className="w-full p-2 text-white bg-blue-400 rounded-full"
				>
					{isLoading ? "fetching..." : "fetch"}
				</button>

				<ul className="flex flex-col gap-2">
					{charData && charCardElement}
					{isLoading && <p>loading ...</p>}
					{error && <p>{error}</p>}
				</ul>
			</section>

			<section className="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
				<h2 className="">Add Characters {"(json server)"}</h2>
				<form>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						type="text"
						name="name"
						onChange={handleChange}
						value={newCharForm.name}
						placeholder="character name"
						className="w-full p-2 mb-4 rounded-xl"
					/>

					<label htmlFor="altMode">Alt Mode</label>
					<input
						id="altMode"
						type="text"
						name="altMode"
						onChange={handleChange}
						value={newCharForm.altMode}
						placeholder="character alt mode"
						className="w-full p-2 mb-4 rounded-xl"
					/>

					<label htmlFor="faction">Faction</label>
					<div className="flex gap-2">
						<input
							id="autobot"
							type="radio"
							name="faction"
							onChange={handleChange}
							value="Autobot"
							checked={newCharForm.faction === "Autobot"}
							className=""
						/>
						<label htmlFor="autobot">Autobot</label>
					</div>

					<div className="flex gap-2 mb-4">
						<input
							id="decepticon"
							type="radio"
							name="faction"
							onChange={handleChange}
							value="Decepticon"
							checked={newCharForm.faction === "Decepticon"}
							className=""
						/>
						<label htmlFor="decepticon">Decepticon</label>
					</div>
					<button
						onClick={handleSubmit}
						className="w-full p-2 text-white bg-blue-400 rounded-full"
					>
						+ add
					</button>
				</form>
			</section>
		</div>
	);
};

export default ApiSB;
