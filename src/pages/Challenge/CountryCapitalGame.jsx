import React, { useEffect, useState } from "react";

import { shuffle } from "./shuffle";

const CountryCapitalGame = ({ options, data }) => {
	const [selected, setSelected] = useState([]);
	const [optionsState, setOptionsState] = useState(options);

	useEffect(() => {
		if (selected.length === 2) {
			if (check()) {
				setTimeout(() => {
					setSelected([]);
					setOptionsState((prev) =>
						prev.filter(
							(option) => option !== selected[0] && option !== selected[1]
						)
					);
				}, 1000);
			} else {
				setTimeout(() => {
					setSelected([]);
				}, 1000);
			}
		}
	}, [selected]);

	const reset = () => {
		setOptionsState(shuffle(options));
	};

	const check = () => {
		if (
			data[selected[0]] === selected[1] ||
			data[selected[1]] === selected[0]
		) {
			return true;
		} else {
			return false;
		}
	};

	const select = (option) => {
		setSelected((prev) => {
			if (prev.includes(option)) {
				return prev.filter((item) => item !== option);
			}
			return [...prev, option];
		});
	};

	const optionsElements = optionsState.map((option) => {
		const active = selected.includes(option);
		const wrong = active && selected.length === 2 && check() === false;
		const right = active && selected.length === 2 && check() === true;

		return (
			<button
				key={option}
				disabled={(selected.length >= 2 && !active) || right || wrong}
				onClick={() => select(option)}
				className={`px-3 py-1 rounded-xl border duration-200 flex-grow
            ${active && "bg-blue-400 text-white border-blue-400"}
            ${wrong && "bg-red-400 text-white border-red-400 "}
            ${right && "bg-green-400 text-white border-green-400"}
            `}
			>
				{option}
			</button>
		);
	});

	return (
		<div className="flex flex-row flex-wrap gap-2 text-sm">
			{optionsState.length > 0 ? (
				optionsElements
			) : (
				<div className="flex flex-col items-center w-full gap-4">
					<h3 className="text-xl">Congratulations!</h3>
					<p className="text-sm">you have finished the challenge!</p>
					<button
						onClick={reset}
						className="px-4 py-1 text-sm text-white duration-200 bg-green-400 rounded-xl hover:scale-110 "
					>
						play again
					</button>
				</div>
			)}
		</div>
	);
};
export default CountryCapitalGame;
