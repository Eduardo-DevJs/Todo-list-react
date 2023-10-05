import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
  }
  
  .marcado {
    text-decoration: 4px line-through ;
    color: red;
  }

  .d-flex{
    display: flex;
    gap: 20px;
    align-items: center;
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