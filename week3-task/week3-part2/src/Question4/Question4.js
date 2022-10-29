import React, { useState } from "react";

const Question4 = () => {
	let [firstName, setFirstName] = useState("");
	let [lastName, setLastName] = useState("");
	let [email, setEmail] = useState("");
	let [contact, setContact] = useState("");
	let [dob, setDob] = useState(new Date(0));

	let [firstNameError, setFirstNameError] = useState("");
	let [lastNameError, setLastNameError] = useState("");
	let [emailError, setEmailError] = useState("");
	let [contactError, setContactError] = useState("");
	let [dobError, setDobError] = useState("");

	let [firstNameValid, setFirstNameValid] = useState(false);
	let [lastNameValid, setLastNameValid] = useState(false);
	let [emailValid, setEmailValid] = useState(false);
	let [contactValid, setContactValid] = useState(false);
	let [dobValid, setDobValid] = useState(false);

	const onChangeHandler = (event) => {
		if (event.target.id === "first-name") {
			validateFirstNameField(event.target.value);
		}

		if (event.target.id === "last-name") {
			validateLastNameField(event.target.value);
		}

		if (event.target.id === "email") {
			validateEmailField(event.target.value);
		}

		if (event.target.id === "contact") {
			validateContactField(event.target.value);
		}

		if (event.target.id === "dob") {
			validateDOBField(event.target.value);
		}
	}

	const validateFirstNameField = (input) => {
		let errorText = "";
		let valid = true;

		if (input.length < 3) {
			errorText = "Please enter a name with at least 3 characters";
			valid = false;
		} else if (input.length >= 20) {
			errorText = "Please enter a name with less than 20 characters";
			valid = false;
		} else {
			errorText = "";
			valid = true;
		}

		setFirstName(input);
		setFirstNameError(errorText);
		setFirstNameValid(valid);
	}

	const validateLastNameField = (input) => {
		let errorText = "";
		let valid = true;

		if (input.length < 3) {
			errorText = "Please enter a name with at least 3 characters";
			valid = false;
		} else if (input.length >= 20) {
			errorText = "Please enter a name with less than 20 characters";
			valid = false;
		} else {
			errorText = "";
			valid = true;
		}

		setLastName(input);
		setLastNameError(errorText);
		setLastNameValid(valid);
	}

	const validateEmailField = (input) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		let errorText = "";
		let valid = true;

		if (!emailRegex.test(input)) {
			errorText = "Please enter a valid email";
			valid = false;
		} else {
			errorText = "";
			valid = true;
		}

		setEmail(input);
		setEmailError(errorText);
		setEmailValid(valid);
	}

	const validateContactField = (input) => {
		let errorText = "";
		let valid = true;

		if (input.length != 8) {
			errorText = "Please enter an 8 digit contact number";
			valid = false;
		} else {
			errorText = "";
			valid = true;
		}

		setContact(input);
		setContactError(errorText);
		setContactValid(valid);
	}

	const validateDOBField = (input) => {
		const currentDate = new Date();
    const inputDate = new Date(input);

		let errorText = "";
		let valid = true;

    if (inputDate > currentDate) {
      errorText = "Please enter a date that is before today's date";
			valid = false;
    }
    else {
      errorText = "";
			valid = true;
    }

		setDob(inputDate);
		setDobError(errorText);
		setDobValid(valid);
	}

	const submitHandler = (event) => {
		event.preventDefault();
		const isFormValid = firstNameValid && lastNameValid && emailValid && contactValid && dobValid;

		if (isFormValid) {
			alert("Form has been submitted successfully!");
		} else {
			alert("Please check the fields.");
		}
	}

	return (
		<React.Fragment>
			<h1>Question 4</h1>
			<form onSubmit={submitHandler}>
				<label htmlFor="first-name">First Name: </label>
				<input type="text" id="first-name" name="first-name" onChange={onChangeHandler} />{firstNameError}<br />
				<label htmlFor="last-name">Last Name: </label>
				<input type="text" id="last-name" name="last-name" onChange={onChangeHandler} />{lastNameError}<br />
				<label htmlFor="first-name">Email: </label>
				<input type="text" id="email" name="email" onChange={onChangeHandler} />{emailError}<br />
				<label htmlFor="first-name">Contact: </label>
				<input type="text" id="contact" name="contact" onChange={onChangeHandler} />{contactError}<br />
				<label htmlFor="first-name">Date of Birth: </label>
				<input type="date" id="dob" name="dob" onChange={onChangeHandler} />{dobError}<br />
				<button type="submit">Submit</button>
			</form>
		</React.Fragment>
	);
}

export default Question4;