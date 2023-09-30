import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Project from './pages/Project';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; 
import AdminProject from './pages/AdminProject';
import EditProject from './pages/EditProject';
import { useAuth } from './auth'; 

const RoutesComponent = () => {
  const { user } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projet/:id" element={<Project />} />
      <Route path="/l0g1n" element={<Login />} />
      
      {user && (
        <>
          <Route path="/dashboard" element={<AdminProject />} />
          <Route path="/edit/:projectId" element={<EditProject />} />
        </>
      )}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
