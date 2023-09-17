import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  frontEndIconsLanguages,
  frontEndIconsLibrariesFrameworksLightTheme,
  frontEndIconsLibrariesFrameworksDarkTheme,
  backEndIconsLanguages,
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
  const [backEndLanguages, setbackEndLanguages] = useState([]);
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
    setbackEndLanguages(displayIcons(backEndIconsLanguages));
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
      id="skills-container"
      style={{
        position: "relative",
        zIndex: 1,
      }}
      className="main w-full min-h-screen"
    >
      <div id="skills-heading" className="xl:pb-10">
        <h1 className="text-4xl pb-1 md:text-5xl md:pb-3">My Skills</h1>
        <h2 className="font-thin pr-5 text-xl md:px-1 md:text-2xl xl:text-xl xl:pr-40">
          You're probably wondering,{" "}
          <span className="font-bold">"Omar, what can you do?"</span> {""}
          With a diverse set of skills and an unyielding desire to keep
          learning, what can't I do? Dive into my skillset below!
        </h2>
      </div>
      <div id="skills-icons" className="">
        <div className="xl:flex xl:justify-evenly ">
          {" "}
          <div id="front-end" className="py-5 space-y-2 xl:w-full">
            <h1 className="text-3xl w-full underline xl:">Front-end</h1>
            <h2 className="text-xl md:text-2xl xl:">Languages</h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-5
          "
            >
              {frontEndLanguages}
            </div>
            <h2 className="text-xl md:text-2xl xl:pt-8 ">Libraries and Frameworks</h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-5
          "
            >
              {frontEndLibrariesFrameworks}
            </div>
          </div>
          <div id="back-end" className="space-y-2 xl:w-full">
            <h1 className="text-3xl w-full underline ">Back-end</h1>

            <h2 className="text-xl md:text-2xl ">Languages</h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-5
          "
            >
              {backEndLanguages}
            </div>
            <h2 className="text-xl md:text-2xl xl:pt-8 ">Libraries and Frameworks</h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-5
          "
            >
              {backEndLibrariesFrameworks}
            </div>
            <h2 className="text-xl md:text-2xl xl:pt-8 ">Databases</h2>
            <div
              className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-5
          "
            >
              {backEndDatabases}
            </div>
          </div>
        </div>

        <div id="other" className=" space-y-2 xl:mt-5">
          <h1 className="text-3xl w-full underline ">Other</h1>
          <div
            className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-7
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
