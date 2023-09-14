import React, { useState, useEffect } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import backArrow from "../../assets/images/image (1).png";
import githubIconWhite from "../../assets/images/githubWhite.png";
import githubIconBlack from "../../assets/svgs/github.svg";

const ProjectModal = ({ project, onClose }) => {
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
      style={{ zIndex: 1000 }}
      // onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{}}
        className="block mx-auto mt-16 opacity-80"
      >
        <img src={backArrow} className="w-10 h-10" alt="back arrow" />
      </button>
      <div
        className="bg-white rounded-3xl overflow-hidden mt-10 mx-8 h-1/3 "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.modalImage}
          className=" w-full h-full object-cover"
          alt="appImage"
        />
      </div>

      <div id="project-details" className="w-full mt-10 px-5">
        <h1 className="text-4xl border-b-4 flex justify-between pl-2 pr-4 ">
          {project.name}{" "}
          <img
            src={githubIconWhite}
            alt="github logo"
            className=" h-10 w-10 relative bottom-1"
          />
        </h1>

        <h2 className="pt-3">{project.description}</h2>
        <a
          href={project.url}
          alt="project url"
          className="font-thin italic leading-10"
        >
          ↗ Visit {project.name}
        </a>
        <h2 className="pt-3 text-2xl border-b-2">Features</h2>
        <div className="grid py-3">
          {project.features.map((feature) => {
            return (
              <div className="" key={feature.featureName}>
                <h3 className="pb-1 text-center">
                  {feature.featureName} &#9989;
                </h3>
                <p className="pb-5 italic">{feature.featureDescription}</p>
              </div>
            );
          })}
        </div>
        <div id="project-images"> </div>
      </div>
    </div>
  );
};

export default ProjectModal;
