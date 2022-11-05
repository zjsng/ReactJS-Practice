import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { addScoreToStore } from '../Actions';

export const Form = ({ func }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const [isNameError, setIsNameError] = useState(false);
  const [isScoreError, setIsScoreError] = useState(false);

  const [nameError, setNameError] = useState(" ");
  const [scoreError, setScoreError] = useState(" ");

  const onChangeHandler = (event) => {
    if (event.target.id === "name-field") {
      validateNameField(event.target.value);
    }

    if (event.target.id === "score-field") {
      validateScoreField(event.target.value);
    }
  }

  const validateNameField = (input) => {
    if (input.length < 5) {
      setIsNameError(true);
      setNameError("Please enter a name with at least 5 characters");
    } else {
      setIsNameError(false);
      setNameError(" ");
    }
    setName(input);
  }

  const validateScoreField = (input) => {
    const regex = /^[0-9\b]+$/;
    if (!regex.test(input)) {
      setIsScoreError(true);
      setScoreError("Please enter a valid number");
    } else {
      setIsScoreError(false);
      setScoreError(" ");
    }
    setScore(input);
  }

  const onClickSubmit = () => {
    const nameValid = !isNameError && (name !== "");
    const scoreValid = !isScoreError && (score !== "");
    if (nameValid && scoreValid) {
      dispatch(addScoreToStore({ playerName: name, playerScore: score }));
      setName("");
      setScore("");
    }
    func(true, (nameValid && scoreValid));
  }

  return (
    <Box
      display="flex"
      gap="0.8em"
      flexDirection="column"
      padding="1em"
      maxWidth="400px"
      height="fit-content"
      boxShadow={4}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Score Submission</Typography>
      <TextField
        required
        fullWidth
        error={isNameError}
        helperText={nameError}
        value={name}
        id="name-field"
        label="Player Name"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <TextField
        required
        fullWidth
        error={isScoreError}
        helperText={scoreError}
        value={score}
        id="score-field"
        label="Enter Score"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <Button variant="contained" onClick={onClickSubmit}>Submit</Button>
    </Box>
  )
}