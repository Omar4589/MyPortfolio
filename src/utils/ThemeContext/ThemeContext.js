import { useState, useEffect, useContext, createContext } from "react";
import { lightTheme, darkTheme } from "./themes";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(lightTheme);

  useEffect(() => {
    console.log("Current theme:", themeState);
  }, [themeState]);

  const toggleThemeState = () => {
    setThemeState((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider
      value={{ themeState, setThemeState, toggleThemeState }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
