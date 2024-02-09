import React, { useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import LandingIcons from "../LandingIcons/LandingIcons";
import { lightIcons, darkIcons } from "../LandingIcons/iconsLanding";

const Footer = () => {
  const { themeState } = useThemeContext();

  const [caption, setCaption] = useState("");

  const handleMouseEnter = (text) => {
    setCaption(text);
  };

  const handleMouseLeave = () => {
    setCaption("");
  };

  return (
    <div
      id="footer"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      } w-full flex flex-col justify-end items-center h-1/6 relative z-20`}
    >
      <div className="w-full bg-zinc-950 text-slate-100 h-full flex flex-col justify-end pb-3 shadow shadow-zinc-700">
        <p className="text-center font-roboto text-sm">{caption}</p>
        <LandingIcons
          width={"w-full"}
          itemsStyle={"items-center"}
          lightIcons={lightIcons}
          darkIcons={darkIcons}
          compName={"footer"}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <p className="text-center text-xs font-robotoLight pt-4 select-none">
          Made with ❤️ by Omar Zumaya
        </p>
        <p className="text-center text-xxs font-robotoLight  select-none">
          Powered by React & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Footer;
