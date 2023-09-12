import githubIcon from "../../assets/svgs/github.svg";
import githubWhiteIcon from "../../assets/svgs/githubWhite.svg";
import YardGemsMobile from "../../assets/images/YardGemsMobile.jpg";
import MealMapprMobile from "../../assets/images/MealMapprMobile.jpg";
import EscapeMeMobile from "../../assets/images/EscapeMeMobile.jpg";
import yg from "../../assets/images/yg.png";
import mp1 from "../../assets/images/mp1.png";

export const projectObjects = [
  {
    name: "YardGems",
    image: yg,
    github: "https://github.com/Omar4589/YardGems",
    url: "https://yardgems-15b0faee737f.herokuapp.com/",
  },
  {
    name: "MealMappr",
    image: mp1,
    github: "https://github.com/Rolyat512/MealMappr",
    url: "https://mealmappr.herokuapp.com/",
  },
  {
    name: "EscapeMe",
    image: EscapeMeMobile,
    github: "https://github.com/Omar4589/Escape-Me",
    url: "https://escape-me.herokuapp.com/",
  },
];

export const displayProjects = (projects) => {
  return projects.map((project) => (
    <div className="rounded-2xl bg-black h-64 overflow-hidden shadow-lg">
      <a href={project.url} alt={project.name} className="">
        <h1 className="absolute mt-5 ml-5 text-3xl text-white text-shadow-lg">
          {project.name}
        </h1>
        <img src={project.image} alt="project" className="rounded-2xl" />
      </a>
    </div>
  ));
};
