import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 1.9rem;
    line-height: 1.6;
    font-family: 'Prompt', sans-serif;
    color: ${props => props.theme.client.colors.cinza};
    background-color: #fff;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.client.colors.azulEscuro};
  }
  ol, ul {
    list-style: none;
  }
  input,
  select {
    font-size: 16px;
    outline: none;
  }
  img{
    height: auto;
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button{
    border: none;
    outline: none;
    line-height: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
