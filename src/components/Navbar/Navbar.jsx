import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import NavbarButton from "./NavbarButton";

import {
	BsBox,
	BsChevronDoubleRight,
	BsChevronDoubleLeft,
} from "react-icons/bs";
import { TbBrandFramerMotion, TbApi } from "react-icons/tb";

const Navbar = () => {
	const [toggleFoldOut, setToggleFoldOut] = useState(false);

	return (
		<nav>
			<div className="fixed top-0 left-0 z-20 flex flex-col w-24 h-full gap-8 py-12 text-gray-300 bg-gray-800 font-extralight">
				<NavbarButton
					icon={<BsBox />}
					title="Sandbox"
					url="/"
					toggleFoldOut={toggleFoldOut}
				/>

				<div className="border-b border-gray-700"></div>

				<NavbarButton
					icon={<TbBrandFramerMotion />}
					title="Animation"
					url="/animation"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<TbApi />}
					title="Handling API"
					url="handlingapi"
					toggleFoldOut={toggleFoldOut}
				/>
			</div>

			<AnimatePresence>
				{toggleFoldOut && (
					<motion.div
						initial={{ x: -120 }}
						animate={{ x: 0 }}
						exit={{ x: -120 }}
						transition={{ type: "tween" }}
						className="fixed top-0 z-10 flex flex-col h-full gap-8 py-12 overflow-hidden text-gray-300 bg-gray-800 w-28 left-24 font-extralight"
					>
						<button className="flex w-full py-2 text-base">Sandbox</button>

						<div className="border-b border-gray-700"></div>

						<button className="flex w-full py-2 text-base ">Animation</button>

						<button className="flex w-full py-2 text-base ">
							Handling API
						</button>
					</motion.div>
				)}
			</AnimatePresence>

			<button
				onClick={() => setToggleFoldOut((prev) => !prev)}
				className="absolute top-0 z-20 flex items-center justify-center w-8 h-8 text-gray-300 bg-gray-800 rounded-full left-8"
			>
				{toggleFoldOut ? <BsChevronDoubleLeft /> : <BsChevronDoubleRight />}
			</button>
		</nav>
	);
};

export default Navbar;
