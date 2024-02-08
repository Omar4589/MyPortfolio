import { useState, useEffect } from "react";
import Hamburger from "../HamburgerMenu/Hamburger";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const Header = () => {
  const { themeState, toggleThemeState } = useThemeContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  useEffect(() => {
    const body = document.body;
    if (isChecked) {
      body.classList.add("overflow-hidden");
    } else {
      // Remove Tailwind classes to allow scrolling
      body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure no-scroll is removed when component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isChecked]); // This effect runs when menuOpen changes

  return (
    <header
      id="header"
      className={` fixed w-full h-16 md:h-20 z-20 flex justify-between px-6 md:px-10 lg:px-20 xl:px-24 transition-all  duration-500 ${
        themeState.name === "light"
          ? isScrolled
            ? "bg-zinc-950 text-slate-100 shadow-sm shadow-zinc-700" // Light theme + scrolled
            : "bg-slate-100 text-zinc-950" // Light theme + not scrolled
          : isScrolled
          ? "bg-zinc-950 text-slate-100 shadow-sm shadow-zinc-700" // Not light theme + scrolled
          : "bg-zinc-950 text-slate-100" // Not light theme + not scrolled
      }`}
    >
      <div className="flex items-center">
        {themeState.name === "light" ? (
          <LightModeOutlinedIcon
            onClick={toggleThemeState}
            className="cursor-pointer mx-2"
          />
        ) : (
          <NightsStayIcon
            onClick={toggleThemeState}
            className="cursor-pointer mx-2"
          />
        )}

        {themeState.name === "light" && (
          <div
            className={`flex items-center space-x-1  text-xxs font-supernatural select-none ${
              isScrolled
                ? isChecked
                  ? "text-zinc-950"
                  : "text-slate-100"
                : "text-zinc-950"
            }`}
          >
            <div className="mt-1">&#8592;</div>{" "}
            <div>click here if you're a vampire</div>
          </div>
        )}
      </div>

      {!isMobile ? (
        <nav className="flex items-center w-1/2 font-robotoM text-lg lg:text-base xl:text-lg">
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
        <Hamburger
          isScrolled={isScrolled}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      )}
    </header>
  );
};

export default Header;
