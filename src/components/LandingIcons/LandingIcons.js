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
  { name: envelopeWhite, url: "mailto:omar4589@hotmail.com" },
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
    <div>
      <div id="landing-icons" style={{ zIndex: 1 }} className="flex">
        {icons.map((icon, index) => (
          <a
            key={icon + index}
            href={icon.url}
            alt="icon url"
            className="z-10 h-8 w-8 mt-3 mr-3 flex justify-center md:h-9 md:w-9 md:mr-5 lg:mr-10 lg:w-11 lg:h-11"
          >
            <img src={icon.name} alt="icon" className="h-full" />
          </a>
        ))}
      </div>
      <a
        href={resume}
        onClick={() => {
          console.log("you clicked the resume button");
        }}
        style={{ borderColor: themeState.text }}
        className="px-3 top-3 border-2 rounded-full relative z-10 md:px-6 md:py-1 md:top-5 md:text-lg lg:text-2xl lg:top-8"
      >
        Resume
      </a>
    </div>
  );
};

export default LandingIcons;
