import React, { useState } from "react";

import { HiMagnifyingGlass, HiPhoto } from "react-icons/hi2";

const Filter = () => {
	const productsData = [
		{
			id: 1,
			name: "Shirt One",
			type: "shirt",
			color: "black",
			price: 20,
		},
		{
			id: 2,
			name: "Shirt Two",
			type: "shirt",
			color: "blue-400",
			price: 30,
		},
		{
			id: 3,
			name: "Hoodie One",
			type: "hoodie",
			color: "blue-400",
			price: 40,
		},
		{
			id: 4,
			name: "Hoodie Two",
			type: "hoodie",
			color: "rose-700",
			price: 50,
		},
		{
			id: 5,
			name: "Sleeveless One",
			type: "sleeveless",
			color: "black",
			price: 20,
		},
		{
			id: 6,
			name: "Sleeveless Two",
			type: "sleeveless",
			color: "white",
			price: 20,
		},
	];

	const [search, setSearch] = useState("");
	const [filterType, setFilterType] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleFilterType = (e) => {
		setFilterType(e.target.value);
	};

	const filteredProductsArray = productsData.filter(
		(product) =>
			product.name.toLowerCase().includes(search.toLowerCase()) &&
			(filterType === "" || product.type === filterType)
	);

	console.log(filterType);

	const productElement = filteredProductsArray.map((product) => (
		<li
			key={product.id}
			className="relative p-2 text-center bg-gray-100 rounded-lg "
		>
			<div className="flex items-center justify-center w-full h-48 mb-2 text-5xl text-gray-200 bg-white rounded-xl">
				<HiPhoto />
			</div>
			<h2 className="pb-2 mb-2 border-b">{product.name}</h2>
			<div className="flex flex-col items-center mb-4">
				<h3 className="mb-2 text-sm">{product.type}</h3>
				<h4
					className={`bg-${product.color} rounded-full shadow-lg w-6 h-6`}
				></h4>
			</div>
			<div className="absolute px-2 py-1 text-white bg-gray-400 top-1 right-1 rounded-xl">
				${product.price - 0.01}
			</div>
		</li>
	));

	return (
		<main className="flex flex-col gap-8">
			{/* <div className="bg-black bg-white bg-rose-700"></div> */}

			<h1 className="text-2xl">Filter</h1>
			<section className="flex flex-col gap-4">
				{/* SEARCH BY NAME */}
				<div className="flex gap-2">
					<input
						type="text"
						name="search"
						onChange={handleSearch}
						value={search}
						className="h-12 px-2 border"
						placeholder="search by name"
					/>
					<button className="flex items-center justify-center w-12 h-12 border">
						<HiMagnifyingGlass />
					</button>
				</div>

				{/* FILTER BY TYPE */}
				<div className="flex gap-4">
					<div className="flex items-center gap-2">
						<input
							id="all"
							type="radio"
							name="type"
							onChange={handleFilterType}
							value=""
							checked={filterType === ""}
						/>
						<label htmlFor="all">all</label>
					</div>

					<div className="flex items-center gap-2">
						<input
							id="shirt"
							type="radio"
							name="type"
							onChange={handleFilterType}
							value="shirt"
						/>
						<label htmlFor="shirt">shirt</label>
					</div>

					<div className="flex items-center gap-2">
						<input
							id="hoodie"
							type="radio"
							name="type"
							onChange={handleFilterType}
							value="hoodie"
						/>
						<label htmlFor="hoodie">hoodie</label>
					</div>

					<div className="flex items-center gap-2">
						<input
							id="sleeveless"
							type="radio"
							name="type"
							onChange={handleFilterType}
							value="sleeveless"
						/>
						<label htmlFor="sleeveless">sleeveless</label>
					</div>
				</div>
			</section>

			<section>
				<ul className="grid w-2/3 grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 md:grid-cols-3">
					{productElement}
				</ul>
			</section>
		</main>
	);
};

export default Filter;
