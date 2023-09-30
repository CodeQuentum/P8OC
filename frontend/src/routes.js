import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound'; 

const RoutesComponent = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
