import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/cerulean/bootstrap.min.css";
import "./index.css";
import Navbar from "./Navbar.js";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.render(
  <React.Fragment>
    <Navbar>
      <App />
    </Navbar>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
