import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AdminProject from './pages/AdminProject';
import EditProject from './pages/EditProject';
import ProtectedRoute from './components/ProtectedRoute';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute element={<AdminProject />} />} />
      <Route path="/edit/:id" element={<ProtectedRoute element={<EditProject />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
