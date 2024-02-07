import linkedInWhite from "../../assets/images/linkedinWhite.png";
import linkedInBlack from "../../assets/svgs/linkedinBlack.svg";

import envelopeWhite from "../../assets/images/envelopeWhite.png";
import envelopeBlack from "../../assets/svgs/envelopeBlack.svg";

import githubWhite from "../../assets/images/githubWhite.png";
import githubBlack from "../../assets/svgs/github.svg";

import { useEffect, useState } from "react";

import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import { GitHub } from "@mui/icons-material";

import resume from "../../assets/Resume1.pdf";

const lightIcons = [
  { name: envelopeWhite, url: "mailto:omarzumayajr@gmail.com" },
  {
    name: linkedInWhite,
    url: "https://www.linkedin.com/in/omar-zumaya-50a55a267/",
  },
  { name: githubWhite, url: "www.github.com/Omar4589" },
];
const darkIcons = [
  { name: envelopeBlack, url: "mailto:omar4589@hotmail.com" },
  {
    name: linkedInBlack,
    url: "https://www.linkedin.com/in/omar-zumaya-50a55a267/",
  },
  { name: githubBlack, url: "https://www.github.com/Omar4589" },
];

const LandingIcons = () => {
  const { themeState } = useThemeContext();
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (themeState.name === "light") {
      setIcons(darkIcons);
    } else {
      setIcons(lightIcons);
    }
  }, [themeState]);

  return (
    <div className="w-4/5 flex flex-col items-start md:items-center ">
      <div
        id="landing-icons"
        style={{ zIndex: 1 }}
        className="flex justify-around space-x-6"
      >
        {icons.map((icon, index) => (
          <a
            key={icon + index}
            href={icon.url}
            alt="icon url"
            className="z-10 h-8 w-8 mt-3 flex justify-center md:h-9 md:w-9 "
          >
            <img src={icon.name} alt="icon" className="h-full" />
          </a>
        ))}
      </div>
      <a
        href={resume}
        className={`px-3 top-3 rounded-full ring ${
          themeState.name === "light" ? "ring-zinc-950" : "ring-slate-100"
        } relative z-10 md:px- md:py- md:top-5 md:text-lg lg:text-1xl flex items-center space-x-1`}
      >
        <span>Resume</span>
        <ion-icon name="paper"></ion-icon>
      </a>
    </div>
  );
};

export default LandingIcons;
