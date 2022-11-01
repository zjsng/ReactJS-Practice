import React from 'react';
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Form = ({onChange, onClick, ...props}) => {
	return (
		<Box
			className='form'
			sx={{
				boxSizing: "border-box",
				maxWidth: "40em",
				height: "fit-content",
				padding: "2em",
				display: "flex",
				flexDirection: 'column',
				alignItems: "center",
				gap: "2em",
				border: 1,
				borderColor: "black",
				borderRadius: "3em",
				boxShadow: 3
			}}
		>
			<Typography variant="h3">Add Task</Typography>
			<TextField id="content" label="Content" variant="outlined" multiline rows={8} sx={{ width: "90%" }} onChange={onChange} />
			<Button variant="contained" onClick={onClick}>Add Task</Button>
		</Box>
	);
}

Form.propTypes = {
	onChange: PropTypes.func,
	onClick: PropTypes.func
}