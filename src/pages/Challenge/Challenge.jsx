import React, { useState } from "react";
import CountryCapitalGame from "./CountryCapitalGame";

import { shuffle } from "./shuffle";

const Challenge = () => {
	const data = {
		Germany: "Berlin",
		Azerbaijan: "Baku",
		Indonesia: "Jakarta",
		Malaysia: "Kuala Lumpur",
		Japan: "Tokyo",
		America: "Washington",
		China: "Beijing",
		Russia: "Moscow",
		Poland: "Warsaw",
	};

	return (
		<>
			<h1 className="w-full pb-6 mb-6 text-xl text-center border-b">
				React Interview Challenge
			</h1>
			<CountryCapitalGame data={data} />
		</>
	);
};

export default Challenge;
