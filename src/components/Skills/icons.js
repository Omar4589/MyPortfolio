import mongoDBIcon from "../../assets/svgs/mongoDBIcon.svg";
import reactIcon from "../../assets/svgs/react.svg";
import nodejsIcon from "../../assets/svgs/noejs.svg";
import cssIcon from "../../assets/svgs/css.svg";
import htmlIcon from "../../assets/svgs/html.svg";
import apolloIcon from "../../assets/svgs/apollo.svg";
import graphqlIcon from "../../assets/svgs/graphql.svg";
import gitIcon from "../../assets/svgs/git.svg";
import githubIcon from "../../assets/svgs/github.svg";
import mysqlIcon from "../../assets/svgs/mysql.svg";
import jsSquareIcon from "../../assets/svgs/javascript-original.svg";
import githubWhiteIcon from "../../assets/svgs/githubWhite.svg";
import apolloWhiteIcon from "../../assets/svgs/apolloWhite.svg";
import tailwindIcon from "../../assets/svgs/tailwindCSS.svg";
import handlebarsJS from "../../assets/svgs/handlebarsJS.svg";
import expressIconWhite from "../../assets/svgs/expressJSDark.svg";
import expressIcon from "../../assets/svgs/expressJS.svg";
import npmIcon from "../../assets/svgs/npmIcon.svg";
import { urlString } from "../../assets/svgs/sequelize.js";
import mongooseIcon from "../../assets/svgs/mongooseIcon.svg";

export const frontEndIconsLanguagesLightTheme = [
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

export const frontEndIconsLanguagesDarkTheme = [
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
    name: "Handlebars JS",
    icon: handlebarsJS,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
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
    name: "Handlebars JS",
    icon: handlebarsJS,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
];

export const backEndIconsLanguagesLightTheme = [
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
];


export const backEndIconsLanguagesDarkTheme = [
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
];


export const backEndIconsDatabasesLightTheme = [
  {
    name: "Mongoose ODM",
    icon: mongooseIcon,
  },
  {
    name: "Sequelize ORM",
    icon: urlString,
  },
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
];



export const backEndIconsDatabasesDarkTheme = [
  {
    name: "Mongoose ODM",
    icon: mongooseIcon,
  },
  {
    name: "Sequelize ORM",
    icon: urlString,
  },
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
];

export const backEndIconsLibrariesFrameworksLightTheme = [
  {
    name: "Apollo",
    icon: apolloIcon,
  },
  {
    name: "Express JS",
    icon: expressIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },

  {
    name: "Node.js",
    icon: nodejsIcon,
  },
];


export const backEndIconsLibrariesFrameworksDarkTheme = [
  {
    name: "Apollo",
    icon: apolloWhiteIcon,
  },
  {
    name: "Express JS",
    icon: expressIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },

  {
    name: "Node.js",
    icon: nodejsIcon,
  },
];


export const otherIcons = [
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "NPM",
    icon: npmIcon,
  },
];



export const displayIcons = (icons) => {
  console.log(icons);

  return icons.map((icon, index) => (
    <div
      className="mt-3 mb-1  justify-center items-center   "
      key={icon.name + index}
    >
      <img
        className={
          icon.name === "Mongoose ODM"
            ? "h-10 w-16 mx-auto"
            : "h-10 w-10 mx-auto"
        }
        src={icon.icon}
        alt={`${icon.name} icon`}
      />
      <h3 className="font-thin text-center text-sm">{icon.name}</h3>
    </div>
  ));
};
