import React, { Component } from "react";

import SubClassComp from "./SubClassComp";

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
				<div className="flex items-center justify-between w-1/2 text-2xl">
					<button onClick={this.subCount}>-</button>
					<p>{this.state.count}</p>
					<button onClick={this.addCount}>+</button>
				</div>
				<SubClassComp test={test} />
			</main>
		);
	}
}

export default ClassComp;
