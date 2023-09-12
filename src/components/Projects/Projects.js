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
        <h1 className="text-4xl pb-1">My Projects</h1>
        <h2 className="font-thin pr-5 text-xl">
          <h2 className="font-thin pr-5">
            Explore my projects. Each crafted to demonstrate a harmonious blend
            of intuitive front-end design with powerful back-end solutions,
            showcasing the power of full-stack development.
          </h2>
        </h2>
      </div>
      <div id="projects" className="grid grid-rows-3 ">
        <div className="rounded-lg bg-black h-56 my-5">
          <span className="text-white">Stuff</span>
        </div>
        <div className="rounded-lg bg-black h-56 my-5">
          <span className="text-white">Stuff</span>
        </div>
        <div className="rounded-lg bg-black h-56  my-5">
          <span className="text-white">Stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
