import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import MySkillstest from "../../components/Skills/MySkillstest";

const MySkillsPage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="my-skills"
      style={{ background: themeState.background }}
      className="w-full min-h-screen px-5 py-56 md:px-10 lg:px-14 xl:pl-20 xl:pr-"
    >
      <MySkillstest />
    </div>
  );
};

export default MySkillsPage;
