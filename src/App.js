import { useEffect } from "react";
import { useThemeContext } from "./utils/ThemeContext/ThemeContext";
import Landing from "./components/Landing/Landing";
import Name from "./components/Name/Name";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Resume from "./components/Resume/Resume";
import Header from "./components/Header/Header";
import ParticlesComponent from "./components/Particles/ParticlesComponent";
import { displayWelcomeLog } from "./utils/WelcomeLogMessage/displayWelcomeLog";
import "./components/Title/cursor.css";

function App() {
  const { themeState } = useThemeContext();

  useEffect(() => {
    displayWelcomeLog();
  }, []);

  const showBugs = () => {
    document.querySelectorAll(".hide-bug").forEach((bug, index) => {
      setTimeout(() => {
        bug.classList.remove("hide-bug");
      }, index * 300);
    });
  };

  const hideBugs = () => {
    document
      .querySelectorAll(".bug, .bug1, .bug2, .bug3, .bug4")
      .forEach((bug) => {
        bug.classList.add("hide-bug");
      });
  };

  const crawl1 = () => {
    setTimeout(() => {
      showBugs();
    }, 16800);

    setTimeout(() => {
      hideBugs();
    }, 19000);
  };

  const crawl2 = () => {
    setTimeout(() => {
      showBugs();
    }, 17000);

    setTimeout(() => {
      hideBugs();
    }, 19500);
  };

  useEffect(() => {
    crawl1();

    setInterval(() => {
      crawl2();
    }, 22000);
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
        <span className="hide-bug bug">🪲 </span>
        <span className="hide-bug bug1">🪲 </span>
        <span className="hide-bug bug2">🪲 </span>
        <span className="hide-bug bug3">🪲 </span>
        <span className="hide-bug bug4">🪲 </span>
      </Landing>
    </div>
  );
}

export default App;
