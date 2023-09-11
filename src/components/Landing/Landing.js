import React from "react";
import styles from "./styles";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Name from "../Name/Name";
import Title from "../Title/Title";

const Landing = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      style={{ background: themeState.background }}
      className="w-full min-h-screen pl-5 pt-56"
    >
      <Name />
      <Title />
    </div>
  );
};

export default Landing;
