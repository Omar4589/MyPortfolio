import React from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Projects from "../../components/Projects/Projects";

const MyProjects = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="my-projects"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full min-h-screen px-5 md:px-10 xl:px-20 pt-60"`}
    >
      <Projects />
    </div>
  );
};

export default MyProjects;
