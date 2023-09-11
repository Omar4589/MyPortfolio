import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import MySkills from "../../components/Skills/MySkills";

const MySkillsPage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      style={{ background: themeState.background }}
      className="w-full min-h-screen px-5 pt-56 "
    >
      <MySkills />
    </div>
  );
};

export default MySkillsPage;
