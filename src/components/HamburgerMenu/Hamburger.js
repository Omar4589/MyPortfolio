import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import "./hamburger.css";
import { useState } from "react";
import Menu from "./Menu";

const Hamburger = ({ isScrolled, isChecked, setIsChecked }) => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="hamburger"
      style={{ color: themeState.menuText }}
      className={`${
        themeState.name === "light" ? "text-zinc-950" : ""
      } relative`}
    >
      <input
        id="hamburger-checkbox"
        aria-labelledby="menu"
        className="link absolute bottom-6  w-6 h-6 opacity-0 cursor-pointer z-20 right-0 "
        type="checkbox"
        aria-label="menu"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div
        id="hamburger-background"
        className="absolute bottom-6 w-6 h-6 flex items-center justify-center z-10 right-0  "
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
