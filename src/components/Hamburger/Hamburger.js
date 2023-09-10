import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";
import { useEffect, useState } from "react";

const Hamburger = () => {
  const { themeState } = useThemeContext();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      id="hamburger"
      style={{ color: themeState.menuText }}
      className="main relative"
    >
      <input
        id="hamburger-checkbox"
        aria-labelledby="menu"
        className="link absolute bottom-4 right-5 w-6 h-6 opacity-0 cursor-pointer z-20"
        type="checkbox"
        aria-label="menu"
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div
        id="hamburger-background"
        className="absolute bottom-4 right-5 w-6 h-6 flex items-center justify-center"
      >
        <div
          id="hamburger-lines"
          style={{
            backgroundColor: isChecked
              ? themeState.isChecked
              : themeState.isNotChecked,
          }}
          className="relative w-full items-center z-10"
        ></div>
      </div>
      <div
        id="menu-container"
        className=" hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
      >
        <div
          id="menu-background"
          style={{ backgroundColor: themeState.text }}
          className="w-full h-full absolute opacity-80 menubackground "
        ></div>
        <div
          id="menu-links"
          className="text-5xl lg:text-6xl text-left relative top-52 lg:top-96 flex flex-col space-y-5 items-center justify-center  "
        >
          <a href="#home">Home</a>
          <a href="#my-skills">My Skills</a>
          <a href="#my-projects">My Projects</a>
          <a href="#about-me">About Me</a>
          <a href="#contact-me">Contact Me</a>
          <a href="#resume">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
