import React, { useState, useEffect } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import backArrow from "../../assets/images/image (1).png";
import githubIconWhite from "../../assets/images/githubWhite.png";
import githubIconBlack from "../../assets/svgs/github.svg";

const ProjectModalTest = ({ project, onClose }) => {
  const { themeState } = useThemeContext();

  useEffect(() => {
    console.log(project);
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

      <div
        id="project"
        className="mt-10 xl:flex xl:mt-5 xl:mx-10  md:block sm:block xs:block"
      >
        {" "}
        <div
          id="project-image"
          className="bg-white rounded-3xl overflow-hidden h-1/2 w-3/4 mx-auto "
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.modalImage}
            className=" w-full h-full object-cover"
            alt="appImage"
          />
        </div>
        <div id="project-details" className="w-full  px-7">
          <h1
            id="project-name"
            className="text-4xl border-b-4 flex justify-between pl-2 pr-4 pt-10"
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

          <h2 className="pt-3 md:text-xl xl:pb-5">{project.description}</h2>

          <a
            href={project.url}
            alt="project url"
            className="font-thin italic leading-10 xl:text-xl"
          >
            ↗ Visit {project.name}
          </a>
        </div>
        

        <div id="technologies" className="px-7">
          {" "}

          <h2 className="pt-3 text-2xl border-b-2 pt-10">Technolgies</h2>
          
          <div className="grid grid-cols-2 py-3 md:text-xl">
            {project.technologies.map((tech) => {
              return (
                <div className="mb-2" key={tech}>
                  <h3 className="pb-1 text-center text-lg">{tech} &#9989;</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalTest;
