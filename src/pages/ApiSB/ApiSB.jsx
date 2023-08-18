import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { AnimatePresence, motion } from "framer-motion";

const ApiSB = () => {
	const [charData, setCharData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isAddingLoading, setIsAddingLoading] = useState(false);
	const [isDeletingLoading, setIsDeletingLoading] = useState(false);
	const [error, setError] = useState("");

	const [showNotif, setShowNotif] = useState(false);

	const initial_char_form = {
		id: uuid(),
		name: "",
		faction: "",
		altMode: "",
		isDeleting: "",
	};

	const [newCharForm, setNewCharForm] = useState(initial_char_form);

	useEffect(() => {
		fetchChar();
	}, []);

	useEffect(() => {
		if (showNotif) {
			setTimeout(() => setShowNotif(false), 3000);
		}
	}, [error]);

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
		setCharData([]);
		setError("");
		setIsLoading(true);
		fetch("http://localhost:8000/characters")
			.then((res) => {
				if (!res.ok) {
					setShowNotif(true);
					setError(`${res.status} : ${res.statusText}`);
				}
				return res.json();
			})
			.then((data) => setCharData(data))
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsAddingLoading(true);
		fetch("http://localhost:8000/characters", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newCharForm),
		})
			.then((res) => {
				if (!res.ok) {
					setShowNotif(true);
					setError(`${res.status} : ${res.statusText}`);
				}
				setCharData((prev) => [...prev, newCharForm]);
				setNewCharForm(initial_char_form);
			})
			.finally(() => {
				setIsAddingLoading(false);
			});
	};

	const deleteChar = (id) => {
		setCharData((prev) =>
			prev.map((char) =>
				char.id === id ? { ...char, isDeleting: true } : char
			)
		);
		fetch(`http://localhost:8000/characters/${id}`, {
			method: "DELETE",
		}).then((res) => {
			if (!res.ok) {
				setShowNotif(true);
				setError(`${res.status} : ${res.statusText}`);
			}
			setCharData((prev) => prev.filter((char) => char.id !== id));
		});
	};

	const notifModal = (
		<div className="fixed p-4 text-gray-400 bg-white border rounded-xl top-2 right-2">
			Error! {error}
		</div>
	);

	const charCardElement =
		charData.length > 0 &&
		charData.map((char) => {
			const { id, name, faction, altMode, isDeleting } = char;
			return (
				<li key={id} className="relative w-full p-4 bg-white rounded-xl">
					<h2 className="pb-2 mb-2 border-b">{name}</h2>
					<p className="text-xs">
						{name} is a member of {faction}. {name} can turn into a {altMode}
					</p>
					<button
						onClick={() => {
							deleteChar(id);
						}}
						className="absolute w-20 px-3 py-2 text-xs text-center text-white bg-red-400 top-2 right-2 rounded-xl"
					>
						{isDeleting ? "deleting..." : "delete"}
					</button>
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

				<ul className="flex flex-col gap-2 overflow-auto h-80">
					{isLoading ? (
						<p className="flex items-center justify-center w-full h-full">
							loading ...
						</p>
					) : charData.length > 0 ? (
						charCardElement
					) : (
						<p className="flex items-center justify-center w-full h-full text-gray-400">
							no character listed yet
						</p>
					)}
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
						{isAddingLoading ? "adding..." : "+ add"}
					</button>
				</form>
			</section>
			{error && showNotif && notifModal}
		</div>
	);
};

export default ApiSB;
