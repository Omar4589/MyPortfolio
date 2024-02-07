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
import materialUIIcon from "../../assets/svgs/materialUI.svg";
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

export const librariesFrameworksLightTheme = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Material UI",
    icon: materialUIIcon,
  },
  {
    name: "Apollo Client/Server",
    icon: apolloIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "Express JS",
    icon: expressIcon,
  },
];

export const librariesFrameworksDarkTheme = [
  {
    name: "React",
    icon: reactIcon,
  },

  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "Material UI",
    icon: materialUIIcon,
  },
  {
    name: "Apollo Client/Servert",
    icon: apolloWhiteIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },

  {
    name: "Express JS",
    icon: expressIcon,
  },
];

export const backEndIconsLanguages = [
  {
    name: "JavaScript",
    icon: jsSquareIcon,
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
    <div
      className="flex flex-col  justify-center items-center  space-y-4 "
      key={icon.name}
    >
      <img
        className={
          icon.name === "Mongoose ODM"
            ? "h-10 w-16"
            : "h-8 w-8 lg:h-12 lg:w-12 xl:w-8 xl:h-8 "
        }
        src={icon.icon}
        alt={`${icon.name} icon`}
      />
      <h3 className=" text-center text-sm font-roboto">{icon.name}</h3>
    </div>
  ));
};
