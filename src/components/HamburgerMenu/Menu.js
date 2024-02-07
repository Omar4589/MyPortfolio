import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Menu = ({ isChecked, setIsChecked }) => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="menu-container"
      className={`${
        !isChecked ? "hidden" : ""
      } absolute top-0 left-1/2 transform -translate-x-custom -translate-y-1/2 transition-transform`}
    >
      <div
        id="menu-background"
        className="w-full h-full absolute opacity-80 menubackground bg-black"
      ></div>
      <div
        id="menu-links"
        className=" text-5xl lg:text-6xl text-left relative  top-40 lg:top-96 xl:top-72  flex flex-col space-y-5 items-center justify-center  text-slate-100 font-robotoBlack"
      >
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125 "
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125 "
          href="#my-skills"
        >
          My Skills
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125 "
          href="#my-projects"
        >
          My Projects
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125 "
          href="#current-focus"
        >
          My Current Focus
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125 "
          href="#about-me-page"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default Menu;
