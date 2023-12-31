import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import { BsFillCaretLeftFill } from "react-icons/bs";

const NavbarButton = ({ icon, title, url, toggleFoldOut }) => {
	const [showTitle, setShowTitle] = useState(false);

	useEffect(() => {
		if (showTitle) {
			setTimeout(() => {
				setShowTitle(false);
			}, 1000);
		}
	}, [showTitle]);

	return (
		<NavLink to={url}>
			{({ isActive }) => (
				<button
					onMouseEnter={() => setShowTitle(true)}
					onMouseLeave={() => setShowTitle(false)}
					className={`items-center gap-6 relative flex pl-8 w-full py-2 text-2xl ${
						isActive ? "border-l-4" : ""
					}`}
				>
					<span className="scale-100">{icon}</span>

					<span
						className={`text-base ml-16 absolute duration-200 ${
							toggleFoldOut ? "scale-100" : "scale-0"
						}`}
					>
						{title}
					</span>
					<AnimatePresence>
						{!toggleFoldOut && showTitle && (
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="absolute top-0 py-2 text-base bg-gray-800 w-28 -right-32 rounded-xl"
							>
								<BsFillCaretLeftFill className="absolute text-gray-800 -left-2 top-3" />
								{title}
							</motion.h1>
						)}
					</AnimatePresence>
				</button>
			)}
		</NavLink>
	);
};

export default NavbarButton;
