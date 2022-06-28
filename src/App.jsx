import React from 'react';
import Nav from './components/Nav';
import Global from './styles/Global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes';

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Nav />
    </>
  );
};

export default App;
