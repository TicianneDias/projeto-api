import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Global from './styles/Global';

const App = () => {
  return (
    <>
      <Global />
      <Home />
      <Nav/>
    </>
  );
};

export default App;
