import React from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import "./style.css";

const App = () => {
  return (
    <div className="divGrid">
      <Profile />
      <About />
    </div>
  );
};

export default App;
