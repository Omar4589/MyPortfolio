import { useEffect } from "react";
import { useThemeContext } from "./utils/ThemeContext/ThemeContext";
import Landing from "./components/Landing/Landing";
import Name from "./components/Name/Name";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Resume from "./components/Resume/Resume";
import Header from "./components/Header/Header";
import Bugs from "./components/Bugs/Bugs";
import ParticlesComponent from "./components/Particles/ParticlesComponent";
import { displayWelcomeLog } from "./utils/WelcomeLogMessage/displayWelcomeLog";
import "./components/Title/cursor.css";

function App() {
  const { themeState } = useThemeContext();

  useEffect(() => {
    displayWelcomeLog();
  }, []);

  return (
    <div
      style={{
        background: themeState.background,
        color: themeState.text,
      }}
    >
      <ParticlesComponent />
      <Header />
      <Landing>
        <Name />
        <Title />
        <Bugs />
      </Landing>
    </div>
  );
}

export default App;
