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
} from "./icons";

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
      id="skills-page-container"
      // style={{
      //   position: "relative",
      //   zIndex: 1,
      // }}
      className="relative z-10  min-h-screen mx-48"
    >
      <div id="skills-heading" className="flex flex-col space-y-2 ">
        <h1 className="text-3xl pb-1 md:text-4xl  lg:text-5xl  xl:text-3xl font-robotoM">
          MY SKILLS
        </h1>
        <h2 className="font-thin pr-5 text-md md:pl-1 md:pr-6 md:text-xl lg:leading-9 lg:text-2xl xl:text-lg xl:leading-7 xl:mx-2 font-roboto">
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
        className="flex flex-col justify-center items-center space-y-8 my-6 "
      >
        <div className="flex w-full justify-between">
          <div id="languages" className=" flex flex-col  items-center w-1/4 space-y-3">
            <h2 className="text-lg underline md:text-2xl  xl:text-xl">
              Languages
            </h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-3
          "
            >
              {frontEndLanguages}
            </div>
          </div>

          <div id="libraries-frameworks" className="flex flex-col  items-center  w-2/3 space-y-3">
            <h2 className="text-lg underline md:text-2xl xl:text-xl">
              Libraries and Frameworks
            </h2>

            <div
              className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6  xl:grid-cols-7
          "
            >
              {librariesFrameworks}
            </div>
          </div>
        </div>


        <div className="flex w-full justify-between ">

        <div id="databases" className=" flex flex-col justify-center items-center space-y-3">
          <h2 className="text-lg underline md:text-2xl xl:text-xl">
            Databases
          </h2>
          <div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4
          "
          >
            {backEndDatabases}
          </div>
        </div>

        <div id="tools" className="  flex flex-col justify-center items-center w-1/2 space-y-3">
          <h1 className="text-lg underline md:text-2xl  xl:text-xl">
            Tools
          </h1>
          <div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 w-full
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
