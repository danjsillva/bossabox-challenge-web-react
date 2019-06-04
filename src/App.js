import React from "react";
import { HashRouter } from "react-router-dom";

import Router from "./Router";

export default function App() {
  return (
    <div className="container">
      <HashRouter>
        <header className="App-header my-5">
          <h1 className="font-weight-bold">VUTTR</h1>
          <h2 className="text-muted">Very Useful Tools to Remember</h2>
        </header>

        <Router />
      </HashRouter>
    </div>
  );
}
