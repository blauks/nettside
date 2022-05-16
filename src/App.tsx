import React from "react";
import "./App.css";
import CVSvg from "./CV_NORSK.svg";

function App() {
  return (
    <div className="App">
      <img src={CVSvg} alt="CV" className="cv" />
    </div>
  );
}

export default App;
