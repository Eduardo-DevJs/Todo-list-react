import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
export default globalStyle;