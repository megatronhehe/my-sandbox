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
import { PiGearSixLight, PiLinkLight } from "react-icons/pi";

const Navbar = () => {
	const [toggleFoldOut, setToggleFoldOut] = useState(false);

	return (
		<nav>
			<div
				className={`fixed top-0 left-0 z-20 flex flex-col h-full gap-8 py-12 text-gray-300 bg-gray-800 font-extralight duration-200 ${
					toggleFoldOut ? "w-64 " : "w-24"
				}`}
			>
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
					icon={<PiGearSixLight />}
					title="Challenge"
					url="/challenge"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<PiLinkLight />}
					title="urlsearchparams"
					url="/urlsearchparams"
					toggleFoldOut={toggleFoldOut}
				/>

				<NavbarButton
					icon={<PiGearSixLight />}
					title="Challenge2"
					url="/challenge2"
					toggleFoldOut={toggleFoldOut}
				/>
			</div>

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
