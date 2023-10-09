import React, { useState } from "react";
import CountryCapitalGame from "./CountryCapitalGame";

import { shuffle } from "./shuffle";

const Challenge = () => {
	const data = {
		Germany: "Berlin",
		Azerbaijan: "Baku",
		Indonesia: "Jakarta",
		Malaysia: "Kuala Lumpur",
	};

	const countries = Object.keys(data);
	const capitals = Object.values(data);
	const options = shuffle([...countries, ...capitals]);

	return (
		<>
			<h1 className="w-full pb-6 mb-6 text-xl text-center border-b">
				React Interview Challenge
			</h1>
			<CountryCapitalGame options={options} data={data} />
		</>
	);
};

export default Challenge;
