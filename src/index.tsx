import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { createBrowserHistory } from "history";

import "./index.scss";
import App from "./components/app";

// const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
