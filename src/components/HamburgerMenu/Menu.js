import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Menu = ({ isChecked, setIsChecked }) => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="menu-container"
      className={`${
        isChecked ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } absolute top-0 left-0 h-screen w-full transform transition-all ease-in-out duration-300`}
    >
      <div
        id="menu-background"
        className="absolute -top-60 -left-1/2 w-menuWidth h-menuHeight rounded-full opacity-80  bg-black"
      ></div>
      <div
        id="menu-links"
        className=" text-4xl md:text-5xl w-full h-screen absolute top-32  flex flex-col space-y-6 items-center text-slate-100 font-robotoBlack"
      >
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className="drop-shadow-lg shadow-slate-100 transition-transform duration-300 hover:scale-125 "
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => {
            setIsChecked(false);
          }}
          className=" transition-transform duration-300 hover:scale-125  "
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
