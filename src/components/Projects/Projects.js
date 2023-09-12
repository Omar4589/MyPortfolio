import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const Projects = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="projects-container"
      style={{
        position: "relative",
        zIndex: 1,
      }}
      className="main w-full min-h-screen"
    >
      <div id="projects-heading">
        <h1 className="text-3xl pb-1">My Projects</h1>
        <h2 className="font-thin pr-5">Something</h2>
      </div>
    </div>
  );
};

export default Projects;
