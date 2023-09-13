import React, { useState, useEffect } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const ProjectModal = ({ project, onClose }) => {
  const { themeState } = useThemeContext();

  useEffect(() => {
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
          src={project.logo}
          className=" w-full h-full object-contain"
          alt="appImage"
        />
      </div>

      <div id="project-details" className="w-full mt-16 px-5">
        <h1 className="text-4xl border-b-4">{project.name}</h1>
        <h2 className="pt-3">
          YardGems is a community-driven platform designed to bring enthusiasts
          and sellers together in a vibrant, user-friendly marketplace. Find
          hidden gems in your neighborhood or list your own treasures to share
          with others.
        </h2>
        <a
          href={project.url}
          alt="project url"
          className="font-thin italic leading-10"
        >
          ↗ Visit YardGems
        </a>
        <h2 className="pt-3 text-2xl border-b-2">Features</h2>
        <div className="grid grid-cols-2 py-3">
          <h3 className="pb-5">Intuitive UI/UX</h3>
          <p className="pb-5">
            Leveraging the power of React and Material UI, integrated with
            Google Maps, to offer users a seamless and visually pleasing
            browsing experience.
          </p>
          <h3 className="pb-5">Robust Backend</h3>
          <p className="pb-5">
            Built on a solid foundation using Node, Express, and Apollo Server,
            ensuring stability and efficiency.
          </p>
          <h3 className="pb-5">Secure Authentication</h3>
          <p className="pb-5">
            Implementing JWT for a secure and reliable user authentication
            process.
          </p>
          <h3 className="pb-5">Optimized Data Management</h3>
          <p className="pb-5">
            Utilizing GraphQL for efficient data querying and manipulation and
            MongoDB for reliable database solutions.
          </p>
          <h3 className="pb-5">Image Uploads</h3>
          <p>
            Facilitating easy image uploads using Multer and Cloudinary,
            enhancing the visual appeal of listings.
          </p>
        </div>
        <div id="project-images"></div>
      </div>
    </div>
  );
};

export default ProjectModal;
