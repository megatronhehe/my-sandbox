import React, { useContext } from "react";

import { TestContext } from "../../context/TestContext";

const Context = () => {
	console.log(useContext(TestContext));

	return (
		<div>
			<h1 className="text-2xl">Context</h1>
		</div>
	);
};

export default Context;
