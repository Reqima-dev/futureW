import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Section from "./Components/section/Section";
import Blog from "./Components/BlogList/Blog";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleShow(menuOpen) {
    setIsMenuOpen(menuOpen);
  }

  return (
    <div className={`container${isMenuOpen ? " dimmed" : ""}`}>
      <Header onToggle={toggleShow} />
      <Section />
      <Blog />

      <footer>
        &copy; Challenge by <span>Frontend Mentor</span>. Coded by 👉🏽
        <a href="https://github.com/Reqima-dev" target="blank">
             Reqima-dev
        </a>
      </footer>
    </div>
  );
};

export default App;
