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

export const frontEndIconsLightTheme = [
  {
    name: "React",
    icon: reactIcon,
  },

  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "Apollo",
    icon: apolloIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "Handlebars JS",
    icon: handlebarsJS,
  },
];

export const frontEndIconsDarkTheme = [
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "Apollo",
    icon: apolloWhiteIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "GitHub",
    icon: githubWhiteIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "JavaScript",
    icon: jsSquareIcon,
  },
];

export const backEndIconsLightTheme = [
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },

  {
    name: "Node.js",
    icon: nodejsIcon,
  },

  {
    name: "Apollo",
    icon: apolloIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "Express JS",
    icon: expressIcon,
  },
  {
    name: "NPM",
    icon: npmIcon,
  },
  {
    name: "Sequelize ORM",
    icon: urlString,
  },
  {
    name: "Mongoose ODM",
    icon: mongooseIcon,
  },
];

export const backEndIconsDarkTheme = [
  {
    name: "MongoDB",
    icon: mongoDBIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Node.js",
    icon: nodejsIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "Apollo",
    icon: apolloWhiteIcon,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "GitHub",
    icon: githubWhiteIcon,
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
  },
  {
    name: "JavaScript",
    icon: jsSquareIcon,
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
