import { useEffect } from "react";
import { useThemeContext } from "./utils/ThemeContext/ThemeContext";
import Landing from "./pages/Landing/Landing";
import AboutMePage from "./pages/AboutMe/AboutMePage";
import Header from "./components/Header/Header";
import ParticlesComponent from "./components/Particles/ParticlesComponent";
import { displayWelcomeLog } from "./utils/WelcomeLogMessage/displayWelcomeLog";
import "./index.css";
import MySkillsPage from "./pages/MySkills/MySkills";
import MyProjectsPage from "./pages/MyProjects/MyProjects";
import Footer from "./components/Footer/Footer";
import CurrentFocusPage from "./pages/CurrentFocusPage/CurrentFocusPage";
import dontLeaveMe from "dontleaveme";

function App() {
  const { themeState } = useThemeContext();

  useEffect(() => {
    dontLeaveMe.init("Please come back! 😭", "Omar Zumaya - Developer");
  });

  useEffect(() => {
    displayWelcomeLog();
  }, []);

  useEffect(() => {
    const metaThemeColor = document.getElementById("theme-color");
    metaThemeColor.setAttribute("content", themeState.metaTag);
  }, [themeState]);

  return (
    <div
      id="app"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full h-full `}
    >
      <ParticlesComponent />
      <Header />
      <Landing />
      <MySkillsPage />
      <MyProjectsPage />
      <CurrentFocusPage />
      <AboutMePage />
      <Footer />
    </div>
  );
}

export default App;
