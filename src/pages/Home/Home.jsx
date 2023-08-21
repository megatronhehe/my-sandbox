import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

const Home = () => {
	const [toggleMore, setToggleMore] = useState(false);

	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-2xl">Home</h1>
			<section className="flex flex-col gap-4"></section>
		</main>
	);
};

export default Home;
