import * as React from 'react';
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MUICard = ({ title, body, ...props }) => {
	return (
		<Card 
			className='card'
			sx={{ minWidth: 275, maxWidth: 500 }}
		>
			<CardContent>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">
					{body}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}

MUICard.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
};

MUICard.defaultProps = {
	title: "Default Title",
	body: "Default Content"
};