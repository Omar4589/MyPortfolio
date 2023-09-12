import { useState, useEffect } from "react";
import TheParticles from "./TheParticles";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import {
  mobileParticlesOptions,
  desktopParticlesOptions,
  mobileParticlesOptionsDarkTheme,
  desktopParticlesOptionsDarkTheme,
} from "./particlesOptions";

const ParticlesComponent = () => {
  const { themeState } = useThemeContext();
  console.log(themeState.name);

  const getParticlesOptions = () => {
    const isMobile = window.innerWidth <= 768;
    const isDarkTheme = themeState.name === "dark";

    if (isMobile) {
      return isDarkTheme
        ? mobileParticlesOptionsDarkTheme
        : mobileParticlesOptions;
    }
    return isDarkTheme
      ? desktopParticlesOptionsDarkTheme
      : desktopParticlesOptions;
  };

  const [particlesOptions, setParticlesOptions] = useState(
    getParticlesOptions()
  );

  useEffect(() => {
    const handleResize = () => {
      setParticlesOptions(getParticlesOptions(themeState.name));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [themeState]);

  useEffect(() => {
    setParticlesOptions(getParticlesOptions(themeState.name));
  }, [themeState]);

  return (
    <div id="particles" style={{  }}>
      <TheParticles id="hero-particles" particlesOptions={particlesOptions} />
    </div>
  );
};

export default ParticlesComponent;
