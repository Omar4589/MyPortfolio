import React from "react";
import styles from "./styles";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const Landing = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      style={{ background: themeState.background }}
      className="w-full min-h-screen"
    >
      {children}
    </div>
  );
};

export default Landing;
