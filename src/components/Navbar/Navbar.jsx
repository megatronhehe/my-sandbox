import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import NavbarButton from "./NavbarButton";

import {
	BsBox,
	BsChevronDoubleRight,
	BsChevronDoubleLeft,
	BsFillClipboardCheckFill,
	BsFilter,
} from "react-icons/bs";
import { TbBrandFramerMotion, TbApi, Tb3DCubeSphere } from "react-icons/tb";
import { RxComponentInstance } from "react-icons/rx";

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
					url="/handlingapi"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<Tb3DCubeSphere />}
					title="Context"
					url="/context"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<BsFillClipboardCheckFill />}
					title="Validation"
					url="/validation"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<RxComponentInstance />}
					title="Class Comp."
					url="/classcomp"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<BsFilter />}
					title="Filter"
					url="/filter"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<BsFilter />}
					title="Challenge"
					url="/challenge"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<BsFilter />}
					title="urlsearchparams"
					url="/urlsearchparams"
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
						<NavLink to="/" className="flex w-full py-2 text-base">
							Sandbox
						</NavLink>

						<div className="border-b border-gray-700"></div>

						<NavLink to="/animation" className="flex w-full py-2 text-base ">
							Animation
						</NavLink>

						<NavLink to="/handlingapi" className="flex w-full py-2 text-base ">
							Handling API
						</NavLink>

						<NavLink to="/context" className="flex w-full py-2 text-base ">
							Context
						</NavLink>

						<NavLink to="/validation" className="flex w-full py-2 text-base ">
							Validation
						</NavLink>

						<NavLink to="/classcomp" className="flex w-full py-2 text-base ">
							Class Comp.
						</NavLink>

						<NavLink to="/filter" className="flex w-full py-2 text-base ">
							Filter
						</NavLink>
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
