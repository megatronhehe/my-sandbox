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

	return <CountryCapitalGame options={options} data={data} />;
};

export default Challenge;
