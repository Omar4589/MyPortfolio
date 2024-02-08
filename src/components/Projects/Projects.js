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
      className="relative mt-28 md:mt-0 z-10 w-full flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-14 xl:mx-24 space-y-6 md:space-y-12"
    >
      <div
        id="projects-heading"
        className="flex flex-col space-y-2 select-none lg:mx-6"
      >
        <h1 className="text-xl  md:text-2xl  xl:text-3xl font-robotoBlack">
        MY PROJECTS
        </h1>

        <h2 className=" text-md   md:text-lg lg:text-xl  lg:leading-9 xl:leading-7  mx-2 font-robotoLight">
          Explore my projects. Each crafted to demonstrate a harmonious blend of
          intuitive{" "}
          <span className="font-robotoM underline">front-end design</span> with
          powerful{" "}
          <span className="font-robotoM underline">back-end solutions</span>,
          showcasing the power of{" "}
          <span className="font-robotoM underline">full-stack development</span>
          .
        </h2>
      </div>

      <div id="projects" className="grid grid-cols-1 space-y-4 md:space-y-6 lg:space-y-0 lg:grid-cols-3 w-full ">
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
