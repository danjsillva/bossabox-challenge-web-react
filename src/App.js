import React from "react";

import { Container } from "./style.js";

export default function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <h1>VUTTR</h1>

        <h2>Very Useful Tools to Remember</h2>
      </header>

      <div>
        <input type="text" name="search" />
        <input type="checkbox" name="onlyTags" />

        <button>+ Add</button>
      </div>
    </Container>
  );
}
