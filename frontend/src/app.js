import React from 'react';
import { AuthProvider } from './auth';
import RoutesComponent from './routes';

function App() {
  return (
    <AuthProvider> 
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;