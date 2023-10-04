import React from "react";

const Layouting = () => {
	return (
		<div className="flex flex-col w-full gap-4 p-4 bg-gray-100 sm:flex-row h-2/3">
			<div className="flex flex-col justify-between w-full h-full gap-4">
				<div className="w-full overflow-hidden bg-red-300 h-2/5">
					<h1 className="h-1/4">Good Morning</h1>
					<span className="h-1/4">5 Septermber 2023</span>
					<ul className="flex items-center gap-2 h-2/4">
						<li className="flex-shrink-0 w-24 h-full bg-black">a</li>
						<li className="flex-shrink-0 w-24 h-full bg-black">a</li>
						<li className="flex-shrink-0 w-24 h-full bg-black">a</li>
						<li className="flex-shrink-0 w-24 h-full bg-black">a</li>
					</ul>
				</div>
				<div className="w-full bg-red-300 h-3/5"></div>
			</div>

			<div className="flex flex-col justify-between w-full h-full gap-4">
				<div className="w-full bg-red-300 h-1/3"></div>
				<div className="w-full bg-red-300 h-2/3"></div>
			</div>
		</div>
	);
};

export default Layouting;
