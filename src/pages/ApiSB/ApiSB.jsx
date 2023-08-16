import React, { useState } from "react";

const ApiSB = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	const fetchAPI = () => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setData(data.products));
	};

	console.log(data);

	const isDataExist = data.length > 0;

	const dataElement =
		isDataExist &&
		data.map((product) => (
			<li key={product.id} className="flex p-2 bg-gray-100 rounded-xl">
				<h2>{product.title}</h2>
			</li>
		));

	return (
		<div className="flex flex-col gap-8">
			<h1 className="text-2xl">Handle API</h1>

			<section className="flex flex-col gap-4 py-4 border-b">
				<h2>Fetch API</h2>
				<button
					onClick={fetchAPI}
					className="px-3 py-1 text-white bg-blue-400 rounded-xl"
				>
					fetch
				</button>
				<ul className="flex flex-col gap-2">
					{isDataExist ? (
						dataElement
					) : (
						<p className="text-center text-gray-300">display items here</p>
					)}
				</ul>
			</section>
		</div>
	);
};

export default ApiSB;
