import React from "react";

// Создаем контекст для темы
const ThemeContext = React.createContext();

// Хук для использования контекста
export const useTheme = () => React.useContext(ThemeContext);

// Компонент для обертки приложения с темой
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false); // Состояние для переключения темы

  // При изменении состояния темы, обновляем дата-атрибут на body
  React.useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme); // Переключение между темной и светлой темой
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};