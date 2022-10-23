import React from "react";

import { Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

/*
  Form inputs required:
  1. Name
  2. Date of Birth
  3. Email
  4. Contact Number
  5. Self-Introduction
*/

const paperStyle = {
  margin: "20px",
  padding: "20px",
  height: "fit-content"
};

class Form extends React.Component {
  state = {
    name: "",
    dob: "",
    email: "",
    contact: "",
    description: "",
    error: {
      nameError: "",
      dobError: "",
      emailError: "",
      contactError: "",
      descriptionError: ""
    },
    valid: {
      nameNotValid: false,
      dobNotValid: false,
      emailNotValid: false,
      contactNotValid: false,
      descriptionNotValid: false
    },
    modal: {
      open: false,
      success: false,
      title: ""
    }
  }

  handleChange = (event) => {
    //console.log(`Target ID: ${event.target.id}, Target Value: ${event.target.value}`);
    if (event.target.id === "name") {
      this.validateNameField(event.target.value);
    }

    if (event.target.id === "dob") {
      this.validateDOBField(event.target.value);
    }

    if (event.target.id === "email") {
      this.validateEmailField(event.target.value);
    }

    if (event.target.id === "contact") {
      this.validateContactField(event.target.value);
    }

    if (event.target.id === "description") {
      this.validateDescField(event.target.value);
    }
  }

  validateNameField = (input) => {
    let regex = /^[a-zA-Z]+$/;

    if (!regex.test(input)) {
      let errorText = "";
      if (input.length === 0) {
        errorText = "Please enter a name";
      }
      else {
        errorText = "Please enter a name with alphabets only";
      }

      this.setState({
        error: { ...this.state.error, nameError: errorText },
        valid: { ...this.state.valid, nameNotValid: true }
      });
    }
    else {
      this.setState({
        name: input,
        error: { ...this.state.error, nameError: "" },
        valid: { ...this.state.valid, nameNotValid: false }
      });
    }
  }

  validateDOBField = (input) => {
    const currentDate = new Date();
    const inputDate = new Date(input);

    if (inputDate > currentDate) {
      this.setState({
        error: { ...this.state.error, dobError: "Please enter a date that is smaller than today's date" },
        valid: { ...this.state.valid, dobNotValid: true }
      });
    }
    else {
      this.setState({
        dob: inputDate.toString(),
        error: { ...this.state.error, dobError: "" },
        valid: { ...this.state.valid, dobNotValid: false }
      });
    }
  }

  validateEmailField = (input) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(input)) {
      let errorText = "";
      if (input.length === 0) {
        errorText = "Please enter your email";
      }
      else {
        errorText = "Please enter a valid email";
      }

      this.setState({
        error: { ...this.state.error, emailError: errorText },
        valid: { ...this.state.valid, emailNotValid: true }
      });
    }
    else {
      this.setState({
        email: input,
        error: { ...this.state.error, emailError: "" },
        valid: { ...this.state.valid, emailNotValid: false }
      });
    }
  }

  validateContactField = (input) => {
    let errorText = this.state.error.contactError;
    let isNotValid = this.state.valid.contactNotValid;

    if (input.length === 0) {
      errorText = "Please enter your contact number";
      isNotValid = true;
    }
    else if (input.length != 10) {
      errorText = "Please enter a 10 digits contact number";
      isNotValid = true;
    }
    else {
      errorText = "";
      isNotValid = false;
      this.setState({ contact: input });
    }

    this.setState({
      error: { ...this.state.error, contactError: errorText },
      valid: { ...this.state.valid, contactNotValid: isNotValid }
    });
  }

  validateDescField = (input) => {
    let numOfWords = input.trim().split(/\s+/).length;

    if (numOfWords < 10) {
      let errorText = "";
      if (input.length === 0) {
        errorText = "Please enter an introduction";
      }
      else {
        errorText = "Please enter a introduction longer than 10 words";
      }

      this.setState({
        error: { ...this.state.error, descriptionError: errorText },
        valid: { ...this.state.valid, descriptionNotValid: true }
      });
    }
    else {
      this.setState({
        description: input,
        error: { ...this.state.error, descriptionError: "" },
        valid: { ...this.state.valid, descriptionNotValid: false }
      });
    }
  }

  handleClose = () => {
    this.setState({ modal: { ...this.state.modal, open: false } });
  }

  submitBtnHandler = (event) => {
    event.preventDefault();
    const areValid = Object.values(this.state.valid).every(v => v === false);
    const noEmpty = (this.state.name !== "") && (this.state.dob !== "") && (this.state.email !== "") && (this.state.contact !== "") && (this.state.description !== "");
    console.log(this.state.dob);
    if (areValid && noEmpty) {
      this.setState({
        modal: {
          open: true,
          success: true,
          title: "Form has been submitted successfully!",
        }
      });
    } else {
      this.setState({
        modal: {
          open: true,
          success: false,
          title: "Form has failed to submit!",
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Paper elevation={20} style={paperStyle}>
          <Grid item container direction="column" justifyContent="center" alignItems="center" spacing={0}>
            <form onSubmit={this.submitBtnHandler} noValidate autoComplete="off">
              <Grid item m={2}>
                <TextField
                  required
                  fullWidth
                  error={this.state.valid.nameNotValid}
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange}
                  helperText={this.state.error.nameError}
                />
              </Grid>
              <Grid item m={2}>
                <TextField
                  required
                  fullWidth
                  error={this.state.valid.dobNotValid}
                  id="dob"
                  label="Dath of Birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange}
                  helperText={this.state.error.dobError}
                />
              </Grid>
              <Grid item m={2}>
                <TextField
                  required
                  fullWidth
                  error={this.state.valid.emailNotValid}
                  id="email"
                  label="Email"
                  type="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange}
                  helperText={this.state.error.emailError}
                />
              </Grid>
              <Grid item m={2}>
                <TextField
                  required
                  fullWidth
                  error={this.state.valid.contactNotValid}
                  id="contact"
                  label="Contact No."
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange}
                  helperText={this.state.error.contactError}
                />
              </Grid>
              <Grid item m={2}>
                <TextField
                  required
                  fullWidth
                  error={this.state.valid.descriptionNotValid}
                  id="description"
                  label="Tell me about yourself"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  multiline
                  rows={5}
                  onChange={this.handleChange}
                  helperText={this.state.error.descriptionError}
                />
              </Grid>
              <Grid item m={2}>
                <Button fullWidth variant="contained" type="submit" onClick={this.submitBtnHandler}>
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Paper>
        <Dialog
          open={this.state.modal.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {this.state.modal.title}
          </DialogTitle>
          {this.state.modal.success ? (
            <DialogContent>
              <Typography>Name: {this.state.name}</Typography>
              <Typography>Date of Birth: {this.state.dob}</Typography>
              <Typography>Email: {this.state.email}</Typography>
              <Typography>Contact: {this.state.contact}</Typography>
              <Typography>Description: {this.state.description}</Typography>
            </DialogContent>
          ) : (
            <DialogContent>
              <Typography>Please check the fields</Typography>
            </DialogContent>
          )}
          <DialogActions>
            <Button onClick={this.handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Form;