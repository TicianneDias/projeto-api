import React from 'react';
import Nav from './components/Nav';
import Values from './pages/Values';
import Global from './styles/Global';

const App = () => {
  return (
    <>
      <Global />
      <Values />
      <Nav/>
    </>
  );
};

export default App;
