import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import { displayProjects } from "./projectObjects";
import { projectObjects } from "./projectObjects";
import ProjectModalTest from "../ProjectModal/modaltest";

const Projects = () => {
  const { themeState } = useThemeContext();
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(displayProjects(projectObjects, handleProjectClick));
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
        <h1 className="text-3xl pb-1 md:text-4xl md:pb-3 lg:text-5xl xl:text-4xl">My Projects</h1>

        <h2 className="font-thin pr-5 pb-4 text-md md:pl-1 md:pr-8 md:pb-6 md:text-xl lg:text-2xl lg:pb-10 xl:text-xl xl:pr-44">
          Explore my projects. Each crafted to demonstrate a harmonious blend of
          intuitive front-end design with powerful back-end solutions,
          showcasing the power of full-stack development.
        </h2>
      </div>


      <div id="projects" className="grid grid-cols-1 xl:grid-cols-3">
        {projects}
      </div>



      
      {isModalOpen && (
        <ProjectModalTest
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Projects;
