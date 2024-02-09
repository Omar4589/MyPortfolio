import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import LandingIcons from "../../components/LandingIcons/LandingIcons";
import { lightIcons, darkIcons } from "../../components/LandingIcons/iconsLanding";

const Landing = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="home"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      } w-full min-h-screen items-center flex  flex-col justify-center  lg:space-y-0 xl:space-y-2 xl:px-36`}
    >
      <Name />
      <Title />
      <LandingIcons
        width={"w-3/4"}
        itemsStyle={"items-start"}
        lightIcons={lightIcons}
        darkIcons={darkIcons}
        compName={"landing"}
      />
    </div>
  );
};

export default Landing;
