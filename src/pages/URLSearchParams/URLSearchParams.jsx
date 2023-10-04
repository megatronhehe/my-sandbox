import React from "react";
import { HiPhoto } from "react-icons/hi2";
import { useSearchParams, Link } from "react-router-dom";

const MyURLSearchParams = () => {
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
			color: "black",
			price: 30,
		},
		{
			id: 3,
			name: "Hoodie One",
			type: "hoodie",
			color: "black",
			price: 40,
		},
		{
			id: 4,
			name: "Hoodie Two",
			type: "hoodie",
			color: "white",
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

	const [searchParams, setSearchParams] = useSearchParams();

	const filter = {
		type: searchParams.get("type"),
		color: searchParams.get("color"),
	};

	const filteredProducts = productsData.filter((product) => {
		const typeMatch = !filter.type || filter.type === product.type;
		const colorMatch = !filter.color || filter.color === product.color;

		return typeMatch && colorMatch;
	});

	function genNewSearchParamString(key, value) {
		const sp = new URLSearchParams(searchParams);
		if (value === null) {
			sp.delete(key);
		} else {
			sp.set(key, value);
		}
		return `?${sp.toString()}`;
	}

	const productsElement = filteredProducts.map((product) => (
		<li
			key={product.id}
			className="relative p-2 text-center bg-gray-100 rounded-lg"
		>
			<div className="flex items-center justify-center w-full h-48 mb-2 text-5xl text-gray-200 bg-white rounded-xl">
				<HiPhoto />
			</div>
			<h2 className="pb-2 mb-2 border-b">{product.name}</h2>
			<div className="flex flex-col items-center mb-4">
				<h3 className="mb-2 text-sm">{product.type}</h3>
				<h4
					className={`bg-${product.color.replace(
						"-",
						""
					)} rounded-full shadow-lg w-6 h-6`}
				></h4>
			</div>
			<div className="absolute px-2 py-1 text-white bg-gray-400 top-1 right-1 rounded-xl">
				${product.price.toFixed(2)}
			</div>
		</li>
	));

	return (
		<div className="flex flex-col gap-4">
			<section className="flex gap-4">
				<Link to={genNewSearchParamString("type", null)}>all</Link>
				<Link to={genNewSearchParamString("type", "shirt")}>shirt</Link>
				<Link to={genNewSearchParamString("type", "hoodie")}>hoodie</Link>
				<Link to={genNewSearchParamString("type", "sleeveless")}>
					sleeveless
				</Link>
			</section>

			<section className="flex gap-4">
				<Link to={genNewSearchParamString("color", null)}>all</Link>
				<Link to={genNewSearchParamString("color", "black")}>black</Link>
				<Link to={genNewSearchParamString("color", "white")}>white</Link>
			</section>

			<ul className="grid w-2/3 grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 md:grid-cols-3">
				{productsElement}
			</ul>
		</div>
	);
};

export default MyURLSearchParams;
