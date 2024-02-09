import { useEffect, useState } from "react";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import ArticleIcon from "@mui/icons-material/Article";
import resume from "../../assets/Resume1.pdf";
import { light } from "@mui/material/styles/createPalette";

const LandingIcons = ({
  width,
  itemsStyle,
  lightIcons,
  darkIcons,
  compName,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { themeState } = useThemeContext();
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (themeState.name === "light") {
      if (compName === "footer") {
        setIcons(lightIcons);
        return;
      }
      setIcons(darkIcons);
    } else {
      setIcons(lightIcons);
    }
  }, [themeState]);

  return (
    <div className={`flex flex-col ${width} ${itemsStyle} md:items-center `}>
      <div
        id="landing-icons"
        style={{ zIndex: 1 }}
        className="flex justify-around space-x-6"
      >
        {icons?.map((icon, index) => (
          <a
            key={icon + index}
            href={icon.url}
            alt="icon url"
            onMouseEnter={() => handleMouseEnter(icon.caption)}
            onMouseLeave={handleMouseLeave}
            className="z-10  h-8 w-8 mt-1 md:mt-3 lg:mt-1 flex justify-center md:h-9 md:w-9 hover:shadow-zinc-700 hover:drop-shadow-md"
          >
            <img src={icon.name} alt="icon" className="h-full" />
          </a>
        ))}
      </div>

      {compName !== "footer" && (
        <a
          href={resume}
          className={`px-3 mt-3 rounded-full ring ${
            themeState.name === "light" ? "ring-zinc-950" : "ring-slate-100"
          } relative z-10 md:px- md:py- md:top-5 md:text-lg lg:text-1xl flex items-center space-x-1`}
        >
          <span>Resume</span>
          <ArticleIcon fontSize="small" />
        </a>
      )}
    </div>
  );
};

export default LandingIcons;
