import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";

const AnimationSB = () => {
	const [count, setCount] = useState(0);
	const [direction, setDirection] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);

	const animateDirection = {
		enter: (direction) => ({ x: direction === "next" ? 200 : -200 }),
		center: { x: 0 },
		exit: (direction) => ({ x: direction === "next" ? -200 : 200 }),
	};

	const nextItem = () => {
		if (!isAnimating) {
			setCount((prev) => prev + 1);
			setDirection("next");
			setIsAnimating(true);

			setTimeout(() => {
				setIsAnimating(false);
			}, 200);
		}
	};

	const prevItem = () => {
		if (!isAnimating) {
			setCount((prev) => prev - 1);
			setDirection("prev");
			setIsAnimating(true);

			setTimeout(() => {
				setIsAnimating(false);
			}, 200);
		}
	};

	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-2xl">Animation</h1>

			<section className="flex flex-col gap-4 ">
				<h2>carousel</h2>

				<div className="flex justify-between w-56 text-gray-400">
					<button
						disabled={isAnimating}
						onClick={prevItem}
						className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md"
					>
						<BiSolidChevronLeft />
					</button>

					<button
						disabled={isAnimating}
						onClick={nextItem}
						className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md"
					>
						<BiSolidChevronRight />
					</button>
				</div>

				<div className="relative flex items-center justify-center w-56 h-56 overflow-hidden bg-gray-100 rounded-xl">
					<AnimatePresence custom={direction}>
						<motion.div
							key={count}
							variants={animateDirection}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ type: "tween" }}
							custom={direction}
							className="absolute flex items-center justify-center w-40 h-40 font-bold text-white bg-blue-300 rounded-xl"
						>
							{count}
						</motion.div>
					</AnimatePresence>
				</div>
			</section>
		</main>
	);
};

export default AnimationSB;
