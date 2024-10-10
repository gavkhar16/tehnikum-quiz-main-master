import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, themes } from "./themeContext";

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const presistedTheme = JSON.parse(localStorage.getItem("currentTheme"));
    if (presistedTheme) {
      setThemeValue(presistedTheme);
    }
  }, []);

  // Переключение темы и сохранение в localStorage
  const toggleTheme = () => {
    setThemeValue((prev) => {
      let newTheme = prev === themes.light ? themes.dark : themes.light;
      localStorage.setItem("currentTheme", JSON.stringify(newTheme));
      return newTheme; // Нужно вернуть новое значение
    });
  };

  // Оптимизируем значение через useMemo
  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme,
    };
  }, [themeValue]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
