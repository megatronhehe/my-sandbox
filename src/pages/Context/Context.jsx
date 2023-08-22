import React, { useContext } from "react";

import TestContext from "../../context/TestContext";

const Context = () => {
	const { value } = useContext(TestContext);

	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-2xl">Context</h1>
			<p>{value}</p>
		</main>
	);
};

export default Context;
