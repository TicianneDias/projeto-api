import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.07s ease-in-out;
  }
  
  :root {
    --color-gray: #ECECEC;
    --color-black: #101010;
    --color-white: #fff;
    --color-pink-primary: #D22688;
    --color-pink-secundary: #E78CC0;

  }
  body {
    background-color: var(--color-gray);
    width: 100vw;
    height: 100vh;
  }
  
`;
