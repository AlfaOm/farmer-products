import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap");

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;
  }
`;
