import { useState, useEffect } from "react";
import MaterialUISwitch from "./MaterialUISwitch";
import Hamburger from "../HamburgerMenu/Hamburger";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const Header = () => {
  const { themeState, toggleThemeState } = useThemeContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    const cleanup = () => {
      window.removeEventListener("resize", handleResize);
    };

    // Clean up the event listener by removing it when the component is unmounted.
    return cleanup;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);

        console.log("scrolling...");
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={` fixed w-full h-20 z-20 flex justify-between lg:px-20 xl:px-24 transition-all  duration-500 ${
        isScrolled
          ? themeState.name === "light"
            ? "bg-zinc-950 text-slate-100 shadow-sm shadow-zinc-700"
            : "bg-zinc-950 text-slate-100 shadow-sm shadow-zinc-700"
          : themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }`}
    >
      <div className="flex items-center">
        <MaterialUISwitch
          isScrolled={isScrolled}
          sx={{ zIndex: 2 }}
          onClick={toggleThemeState}
          className="ml-4  md:ml-7 mt-2 lg:ml-0  "
        />
        {themeState.name === "light" && (
          <div className="flex items-center space-x-1  text-xs font-supernatural">
            <div className="mt-1">&#8592;</div>{" "}
            <div>click here if you're a vampire</div>
          </div>
        )}
      </div>

      {!isMobile ? (
        <nav className="flex items-center w-1/2 font-robotoM text-lg">
          <ul className="flex justify-around  w-full">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#my-skills">My Skills</a>
            </li>
            <li>
              <a href="#my-projects">My Projects</a>
            </li>
            <li>
              <a href="#current-focus">My Current Focus</a>
            </li>
            <li>
              <a href="#about-me-page">About Me</a>
            </li>
          </ul>
        </nav>
      ) : (
        <Hamburger isScrolled={isScrolled} />
      )}
    </header>
  );
};

export default Header;
