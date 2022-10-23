import React from "react";

import { Grid } from "@mui/material";

import Navbar from "./components/Navbar/Navbar"
import AppForm from "./components/AppForm/AppForm";

const App = () => {
  return (
    <div className="App">
      <Grid container direction="column">
        <Navbar />
        <AppForm />
      </Grid>
    </div>
  );
}

export default App;