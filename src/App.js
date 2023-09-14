import { useEffect } from "react";
import { useThemeContext } from "./utils/ThemeContext/ThemeContext";
import Landing from "./pages/Landing/Landing";
import Name from "./components/Name/Name";
import Title from "./components/Title/Title";
import AboutMePage from "./pages/AboutMe/AboutMePage";
import MyWork from "./components/MyWork/MyWork";
import Resume from "./components/Resume/Resume";
import Header from "./components/Header/Header";
import Bugs from "./components/Bugs/Bugs";
import ParticlesComponent from "./components/Particles/ParticlesComponent";
import { displayWelcomeLog } from "./utils/WelcomeLogMessage/displayWelcomeLog";
import "./components/Title/cursor.css";
import "./index.css";
import MySkillsPage from "./pages/MySkills/MySkills";
import MyProjectsPage from "./pages/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";

function App() {
  const { themeState } = useThemeContext();

  useEffect(() => {
    displayWelcomeLog();
  }, []);

  return (
    <div
      id="app"
      style={{
        background: themeState.background,
        color: themeState.text,
        height: "100%",
        width: "100%",
      }}
    >
      <ParticlesComponent />
      <Header />
      <Landing />
      <MySkillsPage />
      <MyProjectsPage />
      <AboutMePage />
      <Footer />
    </div>
  );
}

export default App;
