import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Values from '../pages/Values'
import Period from '../pages/Period'
import Simulation from '../pages/Simulation'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Values/>} path="/Values" />
        <Route element={<Period/>} path="/Period" />
        <Route element={<Simulation/>} path="/Simulation" />
      </Routes>
    </>
  );
};

export default AppRoutes;
