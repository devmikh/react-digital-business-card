import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import ReactSwitch from 'react-switch';

import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
        <div className="App" id={theme}>
          <div className="container">
            <div className="theme-switch">
              <label>{theme === "light" ? "Light Theme" : "Dark Theme"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
            <div className="card-container">
              <Info />
              <About />
              <Interests />
              <Footer />
            </div>
          </div>
        </div>
      
      
    </ThemeContext.Provider>
  );
}

export default App;
