import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalStylesheet from "./GlobalStylesheet";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStylesheet />
  </StrictMode>,
  document.getElementById("root")
);
