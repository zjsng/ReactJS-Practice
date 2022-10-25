import React from "react";

const DisplayData = (props) => {
	const userList = props.data.users.length ? 
		(props.data.users.map(user => {
			return (
				<React.Fragment key={user.email}>
					<h4>{user.name.title} {user.name.first} {user.name.last}</h4>
					<p>Address: {user.location.street.number} {user.location.street.name}, {user.location.postcode}, {user.location.city}, {user.location.country}</p>
					<p>Email: {user.email}</p>
					<p>Phone Number: {user.cell}</p>
					<p>Date of Birth: {user.dob.date}</p>
				</React.Fragment>
			)
		})) : (<p>No response</p>);

	return (
		<React.Fragment>
			{userList}
		</React.Fragment>
	);
}

export default DisplayData;