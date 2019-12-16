import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";

import "normalize.css";
import theme from "./theme";
import WebFont from "webfontloader";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
  }
`;

WebFont.load({
  typekit: {
    id: "xhs8lmp"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
