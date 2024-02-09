import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";
import Menu from "./Menu";

const Hamburger = ({ isScrolled, isChecked, setIsChecked }) => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="hamburger"
      style={{ color: themeState.menuText }}
      className={`${
        themeState.name === "light" ? "text-zinc-950" : ""
      } h-6 w-6`}
    >
      <input
        id="hamburger-checkbox"
        aria-labelledby="menu"
        className="relative w-6 h-6 opacity-0 cursor-pointer justify-center z-20"
        type="checkbox"
        aria-label="menu"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div
        id="hamburger-background"
        className="relative -top-full w-6 h-6 flex items-center justify-center z-10"
      >
        <div 
          id="hamburger-lines"
          className={`${
            isChecked
              ? "bg-slate-100"
              : isScrolled
              ? themeState.name === "light"
                ? "bg-slate-100 "
                : "bg-slate-100 "
              : themeState.name === "light"
              ? "bg-zinc-950"
              : "bg-slate-100"
          } 
          relative w-full items-center z-10`}
        ></div>
      </div>
      <Menu isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default Hamburger;
