import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  frontEndIconsLanguages,
  frontEndIconsLibrariesFrameworksLightTheme,
  frontEndIconsLibrariesFrameworksDarkTheme,
  backEndIconsDatabases,
  otherIconsDark,
  otherIconsLight,
  displayIcons,
  backEndIconsLibrariesFrameworksDarkTheme,
  backEndIconsLibrariesFrameworksLightTheme,
} from "./icons";

const MySkills = () => {
  const { themeState } = useThemeContext();
  const [frontEndLanguages, setfrontEndLanguages] = useState([]);
  const [frontEndLibrariesFrameworks, setfrontEndLibrariesFrameworks] =
    useState([]);
  const [backEndLibrariesFrameworks, setbackEndLibrariesFrameworks] = useState(
    []
  );
  const [backEndDatabases, setbackEndDatabases] = useState([]);
  const [otherTechnologies, setOtherTechnologies] = useState([]);

  useEffect(() => {
    setfrontEndLanguages(displayIcons(frontEndIconsLanguages));
    setfrontEndLibrariesFrameworks(
      displayIcons(
        themeState.name === "dark"
          ? frontEndIconsLibrariesFrameworksDarkTheme
          : frontEndIconsLibrariesFrameworksLightTheme
      )
    );

    setbackEndLibrariesFrameworks(
      displayIcons(
        themeState.name === "dark"
          ? backEndIconsLibrariesFrameworksDarkTheme
          : backEndIconsLibrariesFrameworksLightTheme
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
      style={{
        position: "relative",
        zIndex: 1,
      }}
      className="main w-full min-h-screen"
    >
      <div id="skills-heading" className="xl:pb-4">
        <h1 className="text-3xl pb-1 md:text-4xl md:pb-3 lg:text-5xl lg:pb-6 xl:pb-1 xl:text-4xl">
          My Skills
        </h1>
        <h2 className="font-thin pr-5 text-md md:pl-1 md:pr-12 md:text-xl lg:leading-9 lg:text-2xl xl:text-xl xl:leading-9 xl:pr-48">
          You're probably wondering,
          <span className="font-bold">"Omar, what can you do?"</span> With a
          diverse set of skills and an unyielding desire to keep learning,  <span className="font-bold">what
          can't I do? </span> Dive into my skillset below!
        </h2>
      </div>

      <div id="skills-icons" className="">
        
        <div
          id="languages"
          className="py-3 md:mb-5 lg:pt-10 xl:w-full xl:mb-1 xl:pt-5"
        >
          <h2 className="text-lg underline md:text-2xl  lg:pb-5 xl:pb-2 xl:text-xl">Languages</h2>
          <div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8
          "
          >
            {frontEndLanguages}
          </div>
        </div>

        <div
          id="libraries-frameworks"
          className="pb-3 md:mb-6 xl:w-full xl:mb-1"
        >
          <h2 className="text-lg underline md:text-2xl  lg:pb-5 xl:pb-2 xl:text-xl">
            Libraries and Frameworks
          </h2>

          <div
            id="frontEndLibrariesFrameworks"
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:pb-5 xl:grid-cols-8
          "
          >
            {frontEndLibrariesFrameworks}
          </div>
          <div
            id="backEndLibrariesFrameworks"
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8
          "
          >
            {backEndLibrariesFrameworks}
          </div>
        </div>

        <div id="databases" className="pb-3 md:mb-6 xl:w-full xl:mb-1">
          <h2 className="text-lg underline md:text-2xl  lg:pb-5 xl:pb-2 xl:text-xl">
            Databases
          </h2>
          <div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8
          "
          >
            {backEndDatabases}
          </div>
        </div>

        <div id="tools" className=" pb-3 md:mb-6 xl:mt- xl:w-full xl:mb-1">
          <h1 className="text-lg  underline md:text-2xl  lg:pb-5 xl:pb-2 xl:text-xl">
            Tools
          </h1>
          <div
            className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7
          "
          >
            {otherTechnologies}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
