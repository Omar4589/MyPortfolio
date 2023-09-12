import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  frontEndIconsLanguagesLightTheme,
  frontEndIconsLanguagesDarkTheme,
  frontEndIconsLibrariesFrameworksLightTheme,
  frontEndIconsLibrariesFrameworksDarkTheme,
  backEndIconsLanguagesLightTheme,
  backEndIconsLanguagesDarkTheme,
  backEndIconsDatabasesLightTheme,
  backEndIconsDatabasesDarkTheme,
  otherIcons,
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
    setfrontEndLanguages(
      displayIcons(
        themeState.name === "dark"
          ? frontEndIconsLanguagesDarkTheme
          : frontEndIconsLanguagesLightTheme
      )
    );
    setfrontEndLibrariesFrameworks(
      displayIcons(
        themeState.name === "dark"
          ? frontEndIconsLibrariesFrameworksDarkTheme
          : frontEndIconsLibrariesFrameworksLightTheme
      )
    );
    setbackEndLanguages(
      displayIcons(
        themeState.name === "dark"
          ? backEndIconsLanguagesDarkTheme
          : backEndIconsLanguagesLightTheme
      )
    );
    setbackEndLibrariesFrameworks(
      displayIcons(
        themeState.name === "dark"
          ? backEndIconsLibrariesFrameworksDarkTheme
          : backEndIconsLibrariesFrameworksLightTheme
      )
    );
    setbackEndDatabases(
      displayIcons(
        themeState.name === "dark"
          ? backEndIconsDatabasesDarkTheme
          : backEndIconsDatabasesLightTheme
      )
    );
    setOtherTechnologies(displayIcons(otherIcons));
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
      <div id="skills-heading">
        <h1 className="text-3xl pb-1">My Skills</h1>
        <h2 className="font-thin pr-5">
          You're probably wondering,{" "}
          <span className="font-bold">"Omar, what can you do?"</span> {""}
          With a diverse set of skills and an unyielding desire to keep
          learning, what can't I do? Dive into my skillset below!
        </h2>
      </div>
      <div id="skills-icons">
        <div id="front-end" className="py-5">
          <h1 className="text-2xl w-full ">Front-end</h1>
          <h2>Languages</h2>
          <div className="grid grid-cols-4 ">{frontEndLanguages}</div>
          <h2>Libraries and Frameworks</h2>
          <div className="grid grid-cols-4 ">{frontEndLibrariesFrameworks}</div>
        </div>

        <div id="back-end" className=" ">
          <h1 className="text-2xl w-full ">Back-end</h1>
          <h2>Languages</h2>
          <div className="grid grid-cols-4 ">{backEndLanguages}</div>
          <h2>Libraries and Frameworks</h2>
          <div className="grid grid-cols-4 ">{backEndLibrariesFrameworks}</div>
          <h2>Databases</h2>
          <div className="grid grid-cols-4 ">{backEndDatabases}</div>
        </div>
        <div id="other" className=" ">
          <h1 className="text-2xl w-full ">Other</h1>
          <div className="grid grid-cols-4 ">{otherTechnologies}</div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
