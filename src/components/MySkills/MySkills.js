import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  backEndIconsLightTheme,
  backEndIconsDarkTheme,
  frontEndIconsLightTheme,
  frontEndIconsDarkTheme,
  displayIcons,
} from "./icons";

const MySkills = () => {
  const { themeState } = useThemeContext();
  const [frontEndIcons, setFrontEndIcons] = useState([]);
  const [backEndIcons, setBackEndIcons] = useState([]);

  useEffect(() => {
    setFrontEndIcons(
      displayIcons(
        themeState.name === "dark"
          ? frontEndIconsDarkTheme
          : frontEndIconsLightTheme
      )
    );
    setBackEndIcons(
      displayIcons(
        themeState.name === "dark"
          ? backEndIconsDarkTheme
          : backEndIconsLightTheme
      )
    );
  }, [themeState]);

  return (
    <div
      id="my-skills"
      style={{ background: themeState.background }}
      className="main w-full min-h-screen"
    >
      <div className="pl-5">
        <h1 className="text-3xl pb-1">My Skills</h1>
        <h2 className="font-thin pr-5">
          You're probably wondering,{" "}
          <span className="font-bold">"Omar, what can you do?"</span> {""}
          Dive into my skillset below!
        </h2>
      </div>
      <div className="mx-0">
        <div id="front-end" className="py-5">
          <h1 className="text-2xl w-full pl-5">Front-end</h1>
          <div className="grid grid-cols-4 pr-5"> {frontEndIcons}</div>
        </div>

        <div id="back-end" className=" ">
          <h1 className="text-2xl w-full pl-5">Back-end</h1>
          <div className="grid grid-cols-4 pr-5">{backEndIcons}</div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
