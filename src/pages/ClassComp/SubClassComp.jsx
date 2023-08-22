import React, { Component } from "react";

class SubClassComp extends Component {
	render() {
		return <div>{this.props.test}</div>;
	}
}

export default SubClassComp;
