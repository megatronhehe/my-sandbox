import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { motion, AnimatePresence } from "framer-motion";
import {
	BiSolidChevronLeft,
	BiSolidChevronRight,
	BiPlus,
	BiX,
} from "react-icons/bi";

const AnimationSB = () => {
	const [count, setCount] = useState(0);
	const [direction, setDirection] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);
	const [list, setList] = useState([]);

	// CAROUSEL
	const animateDirection = {
		enter: (direction) => ({
			x: direction === "next" ? 200 : -200,
		}),
		center: { x: 0, scale: 1 },
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

	// LIST

	const listElement =
		list.length > 0 &&
		list.map((item) => (
			<motion.li
				key={item.id}
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
			>
				<div className="flex items-center justify-between p-2 my-2 border rounded-lg">
					<h3>{item.item}</h3>
					<button
						onClick={() => deleteItem(item.id)}
						className="p-1 text-white bg-red-300 rounded-md"
					>
						<BiX />
					</button>
				</div>
			</motion.li>
		));

	const addItem = () => {
		setList((prev) => [
			...prev,
			{ id: uuid(), item: `item ${list.length + 1}` },
		]);
	};

	const deleteItem = (id) => {
		setList((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-2xl">Animation</h1>

			<section className="flex flex-col gap-4 pb-8 border-b">
				<h2>Carousel</h2>

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
					<AnimatePresence initial={false} custom={direction}>
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

			<section className="flex flex-col gap-4 ">
				<div className="flex items-center justify-between w-1/2">
					<h2>List</h2>
					<button
						onClick={addItem}
						className="flex items-center justify-center w-6 h-6 text-white bg-blue-300 rounded-full"
					>
						<BiPlus />
					</button>
				</div>
				<ul className="flex flex-col w-1/2 h-full px-4 py-2 overflow-hidden border ">
					<AnimatePresence initial={false}>{listElement}</AnimatePresence>
				</ul>
			</section>
		</main>
	);
};

export default AnimationSB;
