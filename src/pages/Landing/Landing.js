import React from "react";
import styles from "./styles";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import LandingIcons from "../../components/LandingIcons/LandingIcons";

const Landing = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="home"
      style={{ background: themeState.background }}
      className="w-full min-h-screen px-5 pt-56 "
    >
      <Name />
      <Title />
      <LandingIcons />
    </div>
  );
};

export default Landing;
