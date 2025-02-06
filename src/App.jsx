import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TodosPage from './components/TodoPage/TodoPage';
import { ThemeProvider, useTheme } from "./components/ThemeContext"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme(); // Using Theme Context

  return (
    <button className="theme-button" onClick={toggleTheme}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </button>
  );
};

function App() { 
  return (
    <ThemeProvider>
      <BrowserRouter>
      <ThemeToggleButton />
        <Routes>
          <Route
              path="/"
              element={<HomePage />}
            />
          <Route
            path="/todos"
            element={<TodosPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );    
}

export default App;
