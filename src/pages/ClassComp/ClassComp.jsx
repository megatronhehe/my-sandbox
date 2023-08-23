import React, { Component } from "react";

import SubClassComp from "./SubClassComp";

import { BsPlus, BsDash } from "react-icons/bs";

class ClassComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	addCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	subCount = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		const test = "this string is successfully being passed";

		return (
			<main className="flex flex-col gap-8">
				<h1 className="text-2xl">Class Component </h1>
				<div className="flex items-center justify-between w-1/2 text-2xl text-white">
					<button
						onClick={this.subCount}
						className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-full"
					>
						<BsDash />
					</button>
					<p className="text-black">{this.state.count}</p>
					<button
						onClick={this.addCount}
						className="flex items-center justify-center w-8 h-8 bg-blue-300 rounded-full"
					>
						<BsPlus />
					</button>
				</div>
				<SubClassComp test={test} />
			</main>
		);
	}
}

export default ClassComp;
