import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

import "normalize.css";
import theme from "./theme";
import WebFont from 'webfontloader';

WebFont.load({
  typekit: {
    id: 'xhs8lmp'
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
