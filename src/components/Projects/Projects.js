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
    <div id="projects-container" className="relative z-10 w-full flex flex-col items-center mx-24 space-y-12">
      <div id="projects-heading" className="flex flex-col space-y-4 select-none">
        <h1 className="text-3xl pb-1 md:text-4xl  lg:text-5xl  xl:text-3xl font-robotoBlack">
          My Projects
        </h1>

        <h2 className="font-thin pr-5 text-md md:pl-1 md:pr-6 md:text-xl lg:leading-9 lg:text-2xl xl:text-xl xl:leading-7 xl:mx-2 font-robotoLight">
          Explore my projects. Each crafted to demonstrate a harmonious blend of
          intuitive <span className="font-robotoM underline">front-end design</span> with powerful <span className="font-robotoM underline">back-end solutions</span>,
          showcasing the power of <span className="font-robotoM underline">full-stack development</span>.
        </h2>
      </div>

      <div id="projects" className="grid grid-cols-1 xl:grid-cols-3 w-full">
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
