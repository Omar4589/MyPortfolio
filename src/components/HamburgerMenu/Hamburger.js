import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";
import { useState } from "react";
import Menu from "./Menu";

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
        className="link absolute bottom-4 right-5 w-6 h-6 opacity-0 cursor-pointer z-20 md:right-8 xl:right-20"
        type="checkbox"
        aria-label="menu"
        checked={isChecked} 
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div
        id="hamburger-background"
        className="absolute bottom-4 right-5 w-6 h-6 flex items-center justify-center z-10 md:right-8 xl:right-20"
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
      <Menu isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  );
};

export default Hamburger;
