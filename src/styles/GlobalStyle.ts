import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100vw;
    height: 100vh;
    background-image: url("./background.jpg");
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat; 
  }
`;
export default GlobalStyles;