import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Projects from "../../components/Projects/Projects";

const MyProjects = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="my-projects"
      style={{ background: themeState.background }}
      className="w-full min-h-screen px-5 md:px-10 xl:px-20 pt-60"
    >
      <Projects />
    </div>
  );
};

export default MyProjects;
