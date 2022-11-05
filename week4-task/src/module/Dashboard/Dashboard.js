import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Form } from '../../stories/Form'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Images for carousel
import carouselImage1 from '../../images/geoff-scott-8lUTnkZXZSA-unsplash.jpg';
import carouselImage2 from '../../images/ildar-garifullin-UPjZWkyZ6aw-unsplash.jpg';
import carouselImage3 from '../../images/leah-hetteberg-IoJFOvbqF3c-unsplash.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Rugby',
    src: carouselImage1,
  },
  {
    label: 'Beach Volleyball',
    src: carouselImage2,
  },
  {
    label: 'Soccer',
    src: carouselImage3,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const scores = useSelector(state => state.scores)

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images.length;

  const updateAlert = (shouldOpen, didSucceed) => {
    console.log("open:" + shouldOpen.toString() + ", success: " + didSucceed.toString());
    setOpen(shouldOpen);
    setSuccess(didSucceed);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Typography my={1} align='center' variant='h2'>Dashboard</Typography>
      {/* Form */}
      <Box width="400px" m="1em auto">
        <Form func={updateAlert} />
      </Box>
      {/* <pre>{JSON.stringify(scores, null, 2)}</pre> */}
      {/* Snackbar for Form */}
      <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)}>
        <Alert severity={success ? "success" : "error"} onClose={() => setOpen(false)} sx={{ wdith: "100%" }}>
          {success ? "Form submitted!" : "Form failed to submit."}
        </Alert>
      </Snackbar>

      {/* Carousel */}
      <Box boxShadow={4} m="1em auto" sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.src}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  )
}

export default Dashboard