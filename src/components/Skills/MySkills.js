import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  frontEndIconsLanguages,
  librariesFrameworksLightTheme,
  librariesFrameworksDarkTheme,
  backEndIconsDatabases,
  otherIconsDark,
  otherIconsLight,
  displayIcons,
} from "./iconsSkills";

const MySkills = () => {
  const { themeState } = useThemeContext();
  const [frontEndLanguages, setfrontEndLanguages] = useState([]);
  const [librariesFrameworks, setLibrariesFrameworks] = useState([]);
  const [backEndDatabases, setbackEndDatabases] = useState([]);
  const [otherTechnologies, setOtherTechnologies] = useState([]);

  useEffect(() => {
    setfrontEndLanguages(displayIcons(frontEndIconsLanguages));
    setLibrariesFrameworks(
      displayIcons(
        themeState.name === "dark"
          ? librariesFrameworksDarkTheme
          : librariesFrameworksLightTheme
      )
    );

    setbackEndDatabases(displayIcons(backEndIconsDatabases));

    setOtherTechnologies(
      displayIcons(
        themeState.name === "dark" ? otherIconsDark : otherIconsLight
      )
    );
  }, [themeState]);

  return (
    <div
      id="skills-container"
      className="relative mt-20 md:mt-0 z-10 md:mx-6 lg:mx-14 flex flex-col justify-center space-y-4 md:space-y-8 lg:space-y-12 select-none"
    >
      <div
        id="skills-heading"
        className="flex flex-col space-y-2  mx-6 "
      >
        <h1 className="text-xl md:text-2xl font-robotoBlack">
          MY SKILLS
        </h1>
        <h2 className="text-md lg:text-lg xl:text-xl lg:leading-7  xl:leading-7 md:mx-2 xl:mx-4 font-robotoLight">
          You're probably wondering,
          <span className="font-robotoItalic">
            "Omar, what can you do?"
          </span>{" "}
          With a diverse set of skills and an unyielding desire to keep
          learning, <span className="font-robotoItalic">what can't I do? </span>{" "}
          Dive into my skillset below!
        </h2>
      </div>

      <div
        id="skills-icons"
        className="flex flex-col justify-center items-center  lg:space-y-12 mx-6 md:mx-10 lg:mx-0 font-robotoM"
      >
        <div className="flex flex-col md:space-y-2 lg:space-y-0 lg:flex-row w-full md:justify-around lg:justify-between">
          <div
            id="languages"
            className=" flex flex-col items-start lg:items-center w-full lg:w-2/5 space-y-3"
          >
            <h2 className="w-4/5 text-lg  lg:text-center underline md:text-xl  xl:text-2xl">
              Languages
            </h2>
            <div
              className="grid grid-cols-3 
          "
            >
              {frontEndLanguages}
            </div>
          </div>

          <div
            id="libraries-frameworks"
            className="flex flex-col  items-start lg:items-center w-full   lg:w-7/12 space-y-3"
          >
            <h2 className="text-lg text-center underline md:text-xl xl:text-2xl">
              Libraries and Frameworks
            </h2>

            <div
              className="grid grid-cols-6  
          "
            >
              {librariesFrameworks}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:space-y-2 lg:space-y-0 lg:flex-row w-full md:justify-around lg:justify-between items-start ">
          <div
            id="databases"
            className=" flex flex-col justify-center items-start lg:items-center md:justify-start space-y-3 w-full lg:w-2/5"
          >
            <h2 className="text-lg underline md:text-xl xl:text-2xl">
              Databases
            </h2>
            <div
              className="grid grid-cols-4  lg:grid-cols-4
          "
            >
              {backEndDatabases}
            </div>
          </div>

          <div
            id="tools"
            className="  flex flex-col justify-center items-start lg:items-center w-full  lg:w-7/12 space-y-3"
          >
            <h1 className="text-lg underline md:text-xl  xl:text-2xl">Tools</h1>
            <div
              className="grid grid-cols-5  lg:grid-cols-5  w-full 
          "
            >
              {otherTechnologies}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
