import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Form = () => {
	return (
		<Box
			className='form'
			sx={{
				boxSizing: "border-box",
				width: "50%",
				height: "400px",
				padding: "5%",
				display: "flex",
				flexDirection: 'column',
				alignItems: "center",
				gap: "3em",
				border: 1,
				borderColor: "black",
				borderRadius: "16px",
				boxShadow: 3
			}}
		>
			<TextField id="name" label="Name" variant="outlined" sx={{ width: "90%" }} />
			<TextField id="password" label="Password" variant="outlined" sx={{ width: "90%" }} />
			<Button variant="contained">Submit</Button>
		</Box>
	);
}