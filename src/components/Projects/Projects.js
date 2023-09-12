import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import { displayProjects } from "./projectObjects";
import { projectObjects } from "./projectObjects";

const Projects = () => {
  const { themeState } = useThemeContext();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(displayProjects(projectObjects));
  }, []);

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

        <h2 className="font-thin pr-5 pb-5 text-xl">
          Explore my projects. Each crafted to demonstrate a harmonious blend of
          intuitive front-end design with powerful back-end solutions,
          showcasing the power of full-stack development.
        </h2>
      </div>
      <div id="projects" className="grid grid-rows-3 space-y-5 ">
        {projects}
      </div>
    </div>
  );
};

export default Projects;
