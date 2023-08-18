import React, { useState } from "react";

import { BsStarFill } from "react-icons/bs";

const FetchAPISection = ({ data, setData }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchAPI = () => {
		setLoading(true);
		setError("");
		setData([]);

		fetch("https://dummyjson.com/products")
			.then((res) => {
				if (!res.ok) {
					setError(`${res.status}: ${res.statusText}`);
				}
				return res.json();
			})
			.then((data) => setData(data.products))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	};

	const isDataExist = data.length > 0;

	const dataElement =
		isDataExist &&
		data.map((product) => (
			<li
				key={product.id}
				className="relative flex flex-col justify-between flex-shrink-0 w-48 h-full p-2 text-center bg-white rounded-xl"
			>
				<img
					src={product.thumbnail}
					className="object-cover h-3/4 rounded-xl"
				/>
				<h3 className="flex items-center justify-center gap-2 text-sm">
					<BsStarFill className="text-yellow-400" />
					{product.rating}
				</h3>
				<h2>{product.title}</h2>
				<p className="absolute top-0 right-0 p-1 text-white bg-gray-800 rounded-md shadow-lg">
					${product.price}
				</p>
			</li>
		));

	return (
		<section className="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
			<h2>Fetch API All Products {"(dummy json)"}</h2>

			<div className="flex gap-4">
				<button
					onClick={fetchAPI}
					className="w-full px-3 py-1 text-white bg-blue-400 rounded-xl"
					disabled={loading}
				>
					Fetch
				</button>
				<button
					onClick={() => setData([])}
					className="w-full px-3 py-1 text-white bg-blue-300 rounded-xl"
					disabled={loading}
				>
					Clear
				</button>
			</div>
			<ul className="flex gap-2 overflow-auto h-72">
				{loading ? (
					<p className="flex items-center justify-center w-full text-gray-400 ">
						Loading...
					</p>
				) : isDataExist ? (
					dataElement
				) : (
					<p className="flex items-center justify-center w-full text-gray-400 ">
						{error || "Display items here"}
					</p>
				)}
			</ul>
		</section>
	);
};

export default FetchAPISection;
