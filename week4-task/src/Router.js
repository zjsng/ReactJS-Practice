import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./module/Dashboard/Dashboard"
import Popular from './module/Popular/Popular';
import Contact from './module/Scores/Scores';

import Navbar from './stories/Navbar';

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/popular" element={<Popular/>} />
          <Route path="/scores" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router