import React, { useEffect } from "react";
import backArrow from "../../assets/images/image (1).png";
import githubIconWhite from "../../assets/images/githubWhite.png";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    console.log(project);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const underlineWords = (string, wordList) => {
    const words = string.split(" ");
    const elements = [];

    words.forEach((word, index) => {
      if (
        wordList.includes(word) ||
        wordList.includes(word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ""))
      ) {
        elements.push(
          <span key={index} style={{ textDecoration: "underline" }}>
            {word}
          </span>
        );
      } else {
        elements.push(word);
      }

      if (index < words.length - 1) {
        elements.push(" ");
      }
    });

    return elements;
  };

  return (
    <div
      id="project-modal"
      className="fixed top-0 left-0 w-full h-screen bg-black backdrop-blur-sm bg-opacity-80 overflow-y-auto pb-14 text-white"
      style={{ zIndex: 3 }}
      // onClick={onClose}
    >
      <button
        id="back-button"
        onClick={onClose}
        style={{}}
        className="block mx-auto mt-16 opacity-90"
      >
        <img src={backArrow} className="w-10 h-10" alt="back arrow" />
      </button>

      <div id="project" className="mt-10 lg:mx-7 xl:mt-5 xl:mx-14 ">
        <div className="md:flex md:mx-10 md:pt-5 xl:px-20">
          <div
            id="project-image"
            className="bg-white rounded-3xl overflow-hidden h-1/2 w-3/4 mx-auto xl:w-1/3 "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.modalImage}
              className=" w-full h-full object-cover"
              alt="appImage"
            />
          </div>

          <div
            id="project-title"
            className="w-full  px-7 lg:pt-5 lg:pl-10  xl:my-auto"
          >
            <h1
              id="project-name"
              className="text-4xl border-b-4 flex justify-between pl-2 pr-4 pt-10 md:pt-0 md:pb-1"
            >
              {project.name}
              <a href={project.github} alt="github link">
                <img
                  src={githubIconWhite}
                  alt="github logo"
                  className=" h-8 w-8 relative md:h-10 md:w-10 "
                />
              </a>
            </h1>

            <h2 className="pt-3 md:text-xl xl:pb-5 lg:leading-9 lg:pb-3 ">
              {project.description}
            </h2>

            <a
              href={project.url}
              alt="project url"
              className="font-thin italic leading-10  lg:text-2xl xl:text-xl"
            >
              ↗ Visit {project.name}
            </a>
          </div>
        </div>

        <div
          id="rolesandresponsibilities"
          className="w-full  px-7 lg:pt-6 xl:px-14"
        >
          <h1 className="pt-3 text-2xl border-b-2 pt-10 lg:text-3xl">
            Role & Responsibilities
          </h1>

          <div className="grid grid-cols-1  py-3 md:text-xl md:grid-cols-1 ">
            {project.roleAndResponsibilities.map((r) => {
              return (
                <div className="mb-2" key={r}>
                  <h3 className="pb-1 text-left text-lg lg:text-2xl xl:text-xl">
                    &bull;{" "}
                    {underlineWords(r, [
                      "Node.js",
                      "ExpressJS",
                      "React's",
                      "context",
                      "API",
                      "GraphQL",
                      "JWT",
                      "Cloudinary",
                      "Material-UI",
                      "Tailwind",
                      "CSS",
                      "RESTful",
                      "Nodemailer",
                      "EmailJS",
                      "Express",
                      "Session",
                      "HandlebarJS",
                      "MySQL",
                      "Sequelize",
                      "HandlebarsJS",
                    ])}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div id="technologies" className="px-7  lg:mx-3 ">
          {" "}
          <h2 className="pt-3 text-2xl border-b-2 pt-10 lg:text-3xl">
            Technolgies
          </h2>
          <div className="grid grid-cols-2 py-3 md:text-xl md:grid-cols-4 xl:pt-8">
            {project.technologies.map((tech) => {
              return (
                <div className="mb-2 xl:mb-5" key={tech}>
                  <h3 className="pb-1 text-center text-lg lg:text-2xl ">
                    {tech} &#9989;
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div id="screenshots" className="px-7  lg:mx-3 ">
          <h2 className="pt-3 text-2xl border-b-2 pt-10 lg:text-3xl">
            Screenshots
          </h2>
          <div
            id="screenshots"
            className="grid grid-cols-1 py-5 md:text-xl xl:grid-cols-4 xl:gap-x-40 xl:pt-8"
          >
            {project.screenshots.map((screenshot) => {
              return (
                <div className="mx-auto pb-10 px-10 xl:px-0">
                  <img src={screenshot.img} alt="thumbnail" width="100%" />
                  <h4 className="text-center pt-1 mx-auto">
                    {screenshot.caption}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
