import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import { displayProjects } from "./projectObjects";
import { projectObjects } from "./projectObjects";
import ProjectModal from "../ProjectModal/ProjectModal";

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
        <h1 className="text-4xl pb-1 md:text-5xl md:pb-3">My Projects</h1>

        <h2 className="font-thin pr-5 pb-5 text-xl md:px-1 md:text-2xl">
          Explore my projects. Each crafted to demonstrate a harmonious blend of
          intuitive front-end design with powerful back-end solutions,
          showcasing the power of full-stack development.
        </h2>
      </div>
      <div id="projects" className="grid grid-cols-1 lg:grid-cols-2 lg:pl-10">
        {projects}
      </div>
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Projects;
