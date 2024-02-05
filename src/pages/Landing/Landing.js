import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import LandingIcons from "../../components/LandingIcons/LandingIcons";

const Landing = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="home"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      } w-full min-h-screen items-center px-5 pt-56 md:flex  md:flex-col  md:justify-center md:pt-0 md:px-10 md:space-y-2 xl:px-36`}
    >
      <Name />
      <Title />
      <LandingIcons />
    </div>
  );
};

export default Landing;
