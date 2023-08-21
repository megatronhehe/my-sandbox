import React, { createContext } from "react";

const TestContext = createContext();

export default function TestContextProvider({ children }) {
	return (
		<TestContext.Provider value={{ test: "test" }}>
			{children}
		</TestContext.Provider>
	);
}

export { TestContext };
