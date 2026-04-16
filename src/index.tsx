import React from "react";
import ReactDOM from "react-dom/client";
import CounterContainer from "./containers/CounterContainer";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>
);