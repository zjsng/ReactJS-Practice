import React from "react";
import PropTypes from 'prop-types';

// Destructure the props directly as input
export const Input = ({ size, type, label, name, placeholder, onChange, ...props }) => {
	return (
		<React.Fragment>
			<span>{label}</span>
			<input 
				type={type == "text" ? "text" : "number"}
				name={name}
				placeholder={placeholder}
				onchange={onChange} 
			/>
		</React.Fragment>
	);
}

Input.propTypes = {
	type: PropTypes.oneOf(["text", "number"]),
	name: PropTypes.string,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func
};

Input.defaultProps = {
	type: "text"
};