import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<HomeScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
