import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import MySkills from "../../components/Skills/MySkills";

const MySkillsPage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="my-skills"
      className={` ${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  "w-full min-h-screen px-5  md:px-10 lg:px-14  flex justify-center items-center`}
    >
      <MySkills />
    </div>
  );
};

export default MySkillsPage;
