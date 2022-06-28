import React from 'react';
import Nav from './components/Nav';
import Period from './pages/Period';
import Global from './styles/Global';

const App = () => {
  return (
    <>
      <Global />
      <Period />
      <Nav/>
    </>
  );
};

export default App;
