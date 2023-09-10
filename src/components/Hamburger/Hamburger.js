import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Hamburger = () => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="hamburger"
      style={{ color: themeState.menuText }}
      className="main outer-menu relative"
    >
      <input
        id="hamburger-checkbox"
        aria-labelledby="menu"
        className="checkbox-toggle link absolute bottom-4 right-5 w-6 h-6 opacity-0 cursor-pointer"
        type="checkbox"
        aria-label="menu"
      />
      <div
        id="hamburger-background"
        className={`hamburger absolute bottom-4 right-5 w-6 h-6 flex items-center justify-center `}
      >
        <div
          id="hamburger-lines"
          style={{ backgroundColor: themeState.text }}
          className="relative w-full items-center"
        ></div>
      </div>
      <div
        id="menu-container"
        className="menu absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          id="menu-background"
          style={{ backgroundColor: themeState.text }}
          className="w-full h-full absolute opacity-80"
        ></div>
        <div
       
          id="menu-links"
          className="text-5xl text-left relative top-60 flex flex-col space-y-5 items-center justify-center "
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
