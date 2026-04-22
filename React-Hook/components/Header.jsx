
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Product Dashboard</h1>
      <button onClick={toggleTheme}>
        Theme: {theme}
      </button>
    </header>
  );
}