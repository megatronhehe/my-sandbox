import React from "react";

const MainContainer = ({ children }) => {
	return (
		<main className="flex items-center justify-center ml-24 font-extralight">
			<div className="w-full h-screen max-w-4xl p-8 ">{children}</div>
		</main>
	);
};

export default MainContainer;
