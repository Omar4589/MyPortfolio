import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Menu = ({ isChecked, setIsChecked }) => {
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
        className="text-5xl lg:text-6xl text-left relative top-40 lg:top-96 flex flex-col space-y-5 items-center justify-center  "
      >
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className="beating"
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className="beating"
          href="#skills-container"
        >
          My Skills
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className="beating"
          href="#my-projects"
        >
          My Projects
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className="beating"
          href="#about-me"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Menu;
