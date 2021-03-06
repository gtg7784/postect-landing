import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { BLACK } from "@styles/color";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  h1 {
    margin: 0;
    font-size: 52px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${BLACK};
  }
  p {
    margin: 0;
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #141516;
  }
  a {
    font-size: 17px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #3f5bff;
    text-decoration: none;
  }
  h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
    color: white;
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
  }
  select {
    appearance: none;
    border-radius: 0px;
    padding: 6px 9px;
    border: none;
  }
  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  * {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif' !important;
    z-index: 1;
  }
`;

export default GlobalStyle;
