import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

class ScoreUpdater extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
			input: 0,
			update: false,
			open: false
		};
	}

	changeHandler = (event) => {
		this.setState({
			...this.state,
			input: parseInt(event.target.value, 10),
			update: false
		});
	}

	submitBtnHandler = (event) => {
		event.preventDefault();
		if (this.state.input > this.state.score) {
			this.setState({
				...this.state,
				score: this.state.input,
				update: true,
				open: true
			});
		}
	}

	handleClose = () => {
		console.log("Closing modal...");
		this.setState({ ...this.state, update: false, open: false });
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		console.log(nextState, this.state);
		let result = true;
		if (nextState.input < this.state.score && nextState.update === true) {
			result = false;
		}
		console.log("Should component update? " + result);
		return result;
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitBtnHandler}>
					<label>Enter Score:</label>
					<input type="number" label="Enter score" onChange={this.changeHandler} />
					<input type="submit" value="Submit" />
				</form>
				<div>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							Score
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								The score is currently {this.state.score}
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} autoFocus>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</div>
		);
	}
}

export default ScoreUpdater;