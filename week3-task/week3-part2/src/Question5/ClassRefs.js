import React from "react";

class ClassRefs extends React.Component {
	constructor() {
		super();
		this.classComponentText = React.createRef();
	}

	buttonHandler = (event) => {
		this.classComponentText.current.innerHTML = "This is the updated text for the Class-based Component.";
	}

	render() {
		return (
			<div>
				<h2>Class-based Component</h2>
				<p className="class-component-p" ref={this.classComponentText}>This is a sample text for the Class-based Component.</p>
				<button type="submit" onClick={this.buttonHandler}>Update Text</button>
			</div>
		);
	}
}

export default ClassRefs;