import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; 
import AdminProject from './pages/AdminProject';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/l0g1n" element={<Login />} />
      <Route path="/admin" element={<AdminProject/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;