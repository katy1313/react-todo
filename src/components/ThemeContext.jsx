import { useEffect, createContext, useContext, useState } from "react";

// Theme context creation
const ThemeContext = createContext();

// Context hook
export const useTheme = () => useContext(ThemeContext);

// Component for handling theme
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // Состояние для переключения темы

  // Adding data attribute to the body when theme state changed
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme); // Switching between light and dark themes
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};