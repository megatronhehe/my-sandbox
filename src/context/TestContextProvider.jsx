import React from "react";
import TestContext from "./TestContext";

const TestContextProvider = ({ children }) => {
	const value = "lancunglintang";

	return (
		<TestContext.Provider value={{ value }}>{children}</TestContext.Provider>
	);
};

export default TestContextProvider;
