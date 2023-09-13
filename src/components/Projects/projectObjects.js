import githubIcon from "../../assets/svgs/github.svg";
import githubWhiteIcon from "../../assets/svgs/githubWhite.svg";
import YardGemsMobile from "../../assets/images/YardGemsMobile.jpg";
import MealMapprMobile from "../../assets/images/MealMapprMobile.jpg";
import EscapeMeMobile from "../../assets/images/EscapeMeMobile.jpg";
import yg from "../../assets/images/yg.png";
import yg2 from "../../assets/images/yg2.png";
import yg4 from "../../assets/images/yg4.png";
import yg3 from "../../assets/images/yg3.png";
import mp1 from "../../assets/images/mp1.png";
import m2 from "../../assets/images/m2.png";
import m3 from "../../assets/images/m3.png";
import m4 from "../../assets/images/m4.png";
import m5 from "../../assets/images/M5.png";
import themes from "../../assets/images/themes.jpg";
import meals from "../../assets/images/meals.jpeg";
import ygLogo from "../../assets/images/logo1.PNG";

import appName from "../../assets/images/appName.jpg";

export const projectObjects = [
  {
    name: "YardGems",
    image: yg2,
    logo: appName,
    github: "https://github.com/Omar4589/YardGems",
    url: "https://yardgems-15b0faee737f.herokuapp.com/",
  },
  {
    name: "MealMappr",
    image: m5,
    logo: ygLogo,
    github: "https://github.com/Rolyat512/MealMappr",
    url: "https://mealmappr.herokuapp.com/",
  },
  {
    name: "EscapeMe",
    image: themes,
    logo: ygLogo,
    github: "https://github.com/Omar4589/Escape-Me",
    url: "https://escape-me.herokuapp.com/",
  },
];

export const displayProjects = (projects, onProjectClick) => {
  return projects.map((project) => (
    <div
      className="rounded-2xl bg-black overflow-hidden shadow-lg h-48 my-5 "
      onClick={() => onProjectClick(project)}
    >
      <h1 className="absolute mt-5 ml-5 text-3xl text-white text-shadow-lg">
        {project.name}
      </h1>
      <img
        src={project.image}
        alt="project"
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
  ));
};
