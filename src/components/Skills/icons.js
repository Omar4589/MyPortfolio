import mongoDBIcon from "../../assets/svgs/mongoDBIcon.svg";
import reactIcon from "../../assets/svgs/react.svg";
import nodejsIcon from "../../assets/svgs/nodejs.svg";
import cssIcon from "../../assets/svgs/css.svg";
import htmlIcon from "../../assets/svgs/html.svg";
import apolloIcon from "../../assets/svgs/apollo.svg";
import graphqlIcon from "../../assets/svgs/graphql.svg";
import gitIcon from "../../assets/svgs/git.svg";
import githubIcon from "../../assets/svgs/github.svg";
import mysqlIcon from "../../assets/svgs/mysql.svg";
import jsSquareIcon from "../../assets/svgs/javascript-original.svg";
import githubWhiteIcon from "../../assets/images/githubWhite.png";
import apolloWhiteIcon from "../../assets/svgs/apolloWhite.svg";
import tailwindIcon from "../../assets/svgs/tailwindCSS.svg";
import handlebarsJS from "../../assets/svgs/handlebarsJS.svg";
import expressIcon from "../../assets/svgs/expressJS.svg";
import npmIcon from "../../assets/svgs/npmIcon.svg";
import { urlString } from "../../assets/svgs/sequelize.js";
import mongooseIcon from "../../assets/svgs/mongooseIcon.svg";
import herokuIcon from "../../assets/svgs/heroku.svg";
import herokuIconDark from "../../assets/svgs/herokublack.svg";
export const frontEndIconsLanguages = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
];

export const frontEndIconsLibrariesFrameworksLightTheme = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Apollo Client",
    icon: apolloIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Handlebars JS",
    icon: handlebarsJS,
  },
];

export const frontEndIconsLibrariesFrameworksDarkTheme = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Apollo Client",
    icon: apolloWhiteIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Handlebars JS",
    icon: handlebarsJS,
  },
];

export const backEndIconsLanguages = [
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
];

export const backEndIconsLibrariesFrameworksLightTheme = [
  {
    name: "Express JS",
    icon: expressIcon,
  },
  {
    name: "Apollo Server",
    icon: apolloIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
];

export const backEndIconsLibrariesFrameworksDarkTheme = [
  {
    name: "Express JS",
    icon: expressIcon,
  },
  {
    name: "Apollo Server",
    icon: apolloWhiteIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
];

export const backEndIconsDatabases = [
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },
  {
    name: "Mongoose ODM",
    icon: mongooseIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Sequelize ORM",
    icon: urlString,
  },
];

export const otherIconsLight = [
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "NPM",
    icon: npmIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "Github",
    icon: githubIcon,
  },
  {
    name: "Heroku",
    icon: herokuIconDark,
  },
];

export const otherIconsDark = [
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "NPM",
    icon: npmIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "Github",
    icon: githubWhiteIcon,
  },
  {
    name: "Heroku",
    icon: herokuIcon,
  },
];

export const displayIcons = (icons) => {
  return icons.map((icon) => (
    <div className="mt-3 mb-1  justify-center items-center   " key={icon.name}>
      <img
        className={
          icon.name === "Mongoose ODM"
            ? "h-10 w-16 mx-auto"
            : "h-8 w-8 lg:h-12 lg:w-12 xl:w-8 xl:w-10 mx-auto"
        }
        src={icon.icon}
        alt={`${icon.name} icon`}
      />
      <h3 className="font-thin text-center text-sm">{icon.name}</h3>
    </div>
  ));
};
