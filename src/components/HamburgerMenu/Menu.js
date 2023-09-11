import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Hamburger = ({ isChecked }) => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="menu-container"
      style={{ pointerEvents: isChecked ? "auto" : "none" }}
      className=" absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform"
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
        <a className="beating" href="#home">
          Home
        </a>
        <a className="beating" href="#my-skills">My Skills</a>
        <a className="beating" href="#my-projects">My Projects</a>
        <a className="beating" href="#about-me">About Me</a>
        <a className="beating" href="#contact-me">Contact Me</a>
        <a className="beating" href="#resume">Resume</a>
      </div>
    </div>
  );
};

export default Hamburger;
