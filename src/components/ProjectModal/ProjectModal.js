import React, { useState, useEffect } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

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
      className="fixed top-0 left-0 w-full h-screen bg-black backdrop-blur-sm bg-opacity-80 overflow-y-auto pb-14"
      style={{ zIndex: 1000, color: themeState.menuText }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden mt-28 mx-8 h-1/3 "
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.modalImage}
          className=" w-full h-full object-contain"
          alt="appImage"
        />
      </div>

      <div id="project-details" className="w-full mt-16 px-5">
        <h1 className="text-4xl border-b-4">{project.name}</h1>
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
                <h3 className="pb-1 text-center">{feature.featureName}</h3>
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
