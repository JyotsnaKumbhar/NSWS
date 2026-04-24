// import React from "react";
import Columns from "./Columns";

const App = () => {
  return (
    <div className="app">
      <Columns state="PLANNING" />
      <Columns state="ONGOING" />
      <Columns state="DONE" />
    </div>
  );
};

export default App;
