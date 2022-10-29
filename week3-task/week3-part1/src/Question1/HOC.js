import React from "react";

const HOC = (Component) => {
	const colors = ["#FF731D", "#FFF7E9", "#5F9DF7", "#1746A2"];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];

	return () => {
		return (
			<div style={{backgroundColor: randomColor}}>
				<Component />
			</div>
    );
	}
}

export default HOC;