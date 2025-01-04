/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext(null);

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const obj = {
      theme,
      toggleTheme,
    };
    return (
      <DarkModeContext.Provider value={obj}>{children}</DarkModeContext.Provider>
    );
  };

export default ThemeContext;