import React, { useRef } from "react";

const FunctionRefs = () => {
	const functionComponentText = useRef();

	const buttonHandler = () => {
		functionComponentText.current.innerHTML = "This is the updated text for the Function-based Component.";
	}

	return (
		<div>
			<h2>Function-based Component</h2>
			<p className="function-component-p" ref={functionComponentText}>This is a sample text for the Function-based Component.</p>
			<button type="submit" onClick={buttonHandler}>Update Text</button>
		</div>
	);
}

export default FunctionRefs;