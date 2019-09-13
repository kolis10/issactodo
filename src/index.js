import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import  {Todo}  from "./todo";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
