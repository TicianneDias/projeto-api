import React from 'react';
import Nav from './components/Nav';
import Simulation from './pages/Simulation';
import Global from './styles/Global';

const App = () => {
  return (
    <>
      <Global />
      <Simulation />
      <Nav/>
    </>
  );
};

export default App;
