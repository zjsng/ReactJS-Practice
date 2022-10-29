import React from "react";
import _ from "lodash";

const partA = () => {
	const arrOne = [{ id: 20, name: "alex" }, { id: 30, name: "alina" }];
	const arrTwo = [{ id: 40, name: "hello" }, { id: 30, name: "world" }];

	let result = _.xorBy(arrOne, arrTwo, item => item.id);
	let combinedArray = _.union(arrOne, arrTwo);
	let res = _.difference(combinedArray, result);

	return (
		<div>
			<h3>Question 2 - Part A</h3>
			<pre>result: {JSON.stringify(result)}</pre>
			<pre>res: {JSON.stringify(res)}</pre>
		</div>
	);
}

const partB = () => {
	const str = ["u", "ec"];
	const arr = [{
		storageVal: "u",
		table: ["E", "F"]
	},
	{
		storageVal: "data",
		id: 3
	},
	{
		storageVal: "ec",
		table: ["E"]
	}]

	let arrayOfObj = _.intersectionWith(arr, str, (o, sv) => o.storageVal === sv);
	let tablesArray = _.map(arrayOfObj, "table");

	return (
		<div>
			<h3>Question 2 - Part B</h3>
			<pre>Array of Tables: {JSON.stringify(tablesArray)}</pre>
		</div>
	);
}

const partC = () => {
	const a = [["E"], ["F"]];
	let result = _.flatten(a);

	return (
		<div>
			<h3>Question 2 - Part C</h3>
			<pre>Output: {JSON.stringify(result)}</pre>
		</div>
	);
}

const partD = () => {
	const t = [["E", "F"], [["F"], ["G"]]];
	let deepFlatten = _.flattenDeep(t);
	let result = _.uniq(deepFlatten);

	return (
		<div>
			<h3>Question 2 - Part D</h3>
			<pre>Output: {JSON.stringify(result)}</pre>
		</div>
	);
}

const Question2 = () => {
	return (
		<React.Fragment>
			{partA()}
			{partB()}
			{partC()}
			{partD()}
		</React.Fragment>
	);
}

export default Question2;