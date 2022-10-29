import React from "react";

import Question1 from "./Question1/Question1";
import Question2 from "./Question2/Question2";

const App = () => {
	return (
		<div>
			<h1>Question 1</h1>
			<Question1 />
			<h1>Question 2</h1>
			<Question2 />
		</div>
	);
}

export default App;