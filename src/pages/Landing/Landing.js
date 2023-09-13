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
      <button
        onClick={() => {
          console.log("you clicked the resume button");
        }}
        style={{ borderColor: themeState.text }}
        className="px-3 my-3 z-10  border-2 rounded-full  "
      >
        {" "}
        Resume{" "}
      </button>
    </div>
  );
};

export default Landing;
