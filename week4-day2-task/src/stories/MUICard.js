import * as React from 'react';
import PropTypes from "prop-types";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const MUICard = ({ body, deleteFunc, ...props }) => {
	return (
		<Card
			className='card'
			sx={{ minWidth: "5em", maxWidth: "12em" }}
		>
			<CardContent>
				<Typography variant="body2">
					{body}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={deleteFunc}>Delete</Button>
			</CardActions>
		</Card>
	);
}

MUICard.propTypes = {
	body: PropTypes.string
};

MUICard.defaultProps = {
	body: "Default Content"
};