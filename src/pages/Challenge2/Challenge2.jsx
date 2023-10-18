import React, { useEffect, useState } from "react";

import { PiX } from "react-icons/pi";

const Challenge2 = () => {
	const [data, setData] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [showList, setShowList] = useState(false);
	const [selected, setSelected] = useState({ name: "", url: "" });

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/berry")
			.then((res) => res.json())
			.then((data) => setData(data.results));
	}, []);

	const sortedData = data.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	const filteredData = sortedData.filter((item) =>
		item.name.includes(searchInput)
	);

	const dataElement = filteredData.map((item) => (
		<li
			onClick={() => {
				setSearchInput(item.name);
				setSelected(item);
			}}
			key={item.name}
			className="px-4 py-2 cursor-pointer hover:bg-blue-300 hover:text-white"
		>
			{item.name}
		</li>
	));

	const clear = () => {
		setSelected({ name: "", url: "" });
		setSearchInput("");
	};

	return (
		<div className="flex flex-col items-center">
			<h1>Challenge2</h1>
			{selected.name.length > 0 ? (
				<div className="flex flex-col items-center justify-center h-24 mt-8">
					<h2 className="text-2xl">{selected.name}</h2>
					<a href={selected.url} target="_blank">
						Link
					</a>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center h-24 mt-8">
					<h2>no item selected yet</h2>
				</div>
			)}
			<div className="relative flex items-center mt-8 w-72">
				<input
					type="text"
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
					placeholder="search or select.."
					onFocus={() => setShowList(true)}
					onBlur={() =>
						setTimeout(() => {
							setShowList(false);
						}, 100)
					}
					className="w-full px-4 py-2 border rounded-lg outline-none"
				/>
				<button
					onClick={clear}
					className="absolute px-2 py-2 ml-2 text-sm text-gray-400 duration-200 rounded-md right-2 hover:bg-red-300 hover:border-red-300 hover:text-white"
				>
					<PiX />
				</button>
			</div>

			{showList && (
				<>
					<ul className="border rounded-lg w-72">
						{filteredData.length > 0 ? (
							dataElement
						) : (
							<li className="px-4 py-2 text-red-300 cursor-pointer ">
								no {searchInput} is found
							</li>
						)}
					</ul>
				</>
			)}
		</div>
	);
};

export default Challenge2;
