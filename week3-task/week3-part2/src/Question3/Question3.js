import React, { useState } from "react";

const Question3 = () => {
	let [arrayOfObj, setArrayOfObj] = useState([
		{ color: "red", value: "#f00" },
		{ color: "green", value: "#0f0" },
		{ color: "blue", value: "#00f" },
		{ color: "cyan", value: "#0ff" },
		{ color: "magenta", value: "#f0f" },
		{ color: "yellow", value: "#ff0" },
		{ color: "black", value: "#000" }
	]);

	let [person, setPerson] = useState(
		{ firstName: "Keanu", lastName: "Reeves", age: 42, gender: "M", occupation: "Actor", netWorth: "$10,000,000" }
	);

	let [text, setText] = useState("This is a sample text");
	let [number, setNumber] = useState(12345);
	let [truth, setTruth] = useState(true);
	let [array, setArray] = useState([[12, 23, 34, 45, 56, 67, 78, 89, 90]]);

	const updateArrayOfObj = () => {
		let tempArray = [...arrayOfObj];
		tempArray[1] = { color: "pink", value: "#FF00D1" };
		setArrayOfObj(tempArray);
	}

	const updatePerson = () => {
		setPerson({...person, age: 58, netWorth: "$380,000,000" });
	}

	const updateOtherDatatypes = () => {
		setText("Hello World!");
		setNumber(67890);
		setTruth(false);
		setArray([98, 87, 76, 65, 54, 43, 32, 21, 10]);
	}

	return (
		<React.Fragment>
			<h1>Question 3</h1>
			<pre>{JSON.stringify(arrayOfObj, null, 4)}</pre>
			<button onClick={updateArrayOfObj}>Update Array of Object's 2nd index</button><br />

			<pre>{JSON.stringify(person, null, 4)}</pre>
			<button onClick={updatePerson}>Update Object's 2 property values</button><br />

			<p>String: {text}</p>
			<p>Number: {number}</p>
			<p>Boolean: {truth.toString()}</p>
			<p>Array: {array.toString()}</p>
			<button onClick={updateOtherDatatypes}>Update all the remaining datatypes</button><br />
		</React.Fragment>
	);
}

export default Question3;