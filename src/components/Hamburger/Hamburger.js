import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";

const Hamburger = () => {
  const { themeState } = useThemeContext();
  return (
    <div className="outer-menu relative">
      <input
        aria-labelledby="menu"
        className="checkbox-toggle link absolute bottom-4 right-5 w-6 h-6 opacity-0 cursor-pointer"
        type="checkbox"
        aria-label="menu"
      />
      <div
        className={`hamburger absolute bottom-4 right-5 w-6 h-6 flex items-center justify-center `}
      >
        <div
          style={{ backgroundColor: themeState.text }}
          className="relative w-full items-center"
        ></div>
      </div>
      <div className="menu absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          style={{ backgroundColor: themeState.text }}
          className="relative w-full h-full flex items-center justify-center opacity-70"
        >
          <div className="text-white">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
