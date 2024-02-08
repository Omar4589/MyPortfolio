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
    url: "https://html.com/",
  },
  {
    name: "CSS",
    icon: cssIcon,
    url: "https://www.w3schools.com/css/",
  },
  {
    name: "JavaScript",
    icon: jsSquareIcon,
    url: "https://www.javascript.com/",
  },
];

export const librariesFrameworksLightTheme = [
  {
    name: "React",
    icon: reactIcon,
    url: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    icon: materialUIIcon,
    url: "https://mui.com/material-ui/",
  },
  {
    name: "Apollo Client/Server",
    icon: apolloIcon,
    url: "https://www.apollographql.com/",
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
    url: "https://graphql.org/",
  },
  {
    name: "Express JS",
    icon: expressIcon,
    url: "https://expressjs.com/",
  },
];

export const librariesFrameworksDarkTheme = [
  {
    name: "React",
    icon: reactIcon,
    url: "https://react.dev/",
  },

  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    icon: materialUIIcon,
    url: "https://mui.com/material-ui/",
  },
  {
    name: "Apollo Client/Server",
    icon: apolloWhiteIcon,
    url: "https://www.apollographql.com/",
  },
  {
    name: "GraphQL",
    icon: graphqlIcon,
    url: "https://graphql.org/",
  },

  {
    name: "Express JS",
    icon: expressIcon,
    url: "https://expressjs.com/",
  },
];

export const backEndIconsDatabases = [
  {
    name: "MongoDB",
    icon: mongoDBIcon,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Mongoose ODM",
    icon: mongooseIcon,
    url: "https://mongoosejs.com/",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    url: "https://www.mysql.com/",
  },
  {
    name: "Sequelize ORM",
    icon: urlString,
    url: "https://sequelize.org/",
  },
];

export const otherIconsLight = [
  {
    name: "Node.js",
    icon: nodejsIcon,
    url: "https://nodejs.org/en",
  },
  {
    name: "NPM",
    icon: npmIcon,
    url: "https://www.npmjs.com/",
  },
  {
    name: "Git",
    icon: gitIcon,
    url: "https://git-scm.com/",
  },
  {
    name: "Github",
    icon: githubIcon,
    url: "https://www.github.com",
  },
  {
    name: "Heroku",
    icon: herokuIconDark,
    url: "https://www.heroku.com",
  },
];

export const otherIconsDark = [
  {
    name: "Node.js",
    icon: nodejsIcon,
    url: "https://nodejs.org/en",
  },
  {
    name: "NPM",
    icon: npmIcon,
    url: "https://www.npmjs.com/",
  },
  {
    name: "Git",
    icon: gitIcon,
    url: "https://git-scm.com/",
  },
  {
    name: "Github",
    icon: githubWhiteIcon,
    url: "https://www.github.com",
  },
  {
    name: "Heroku",
    icon: herokuIcon,
    url: "https://www.heroku.com",
  },
];

export const displayIcons = (icons) => {
  return icons.map((icon) => (
    <div
      className="flex flex-col  justify-start items-center  space-y-3 pb-5"
      key={icon.name}
    >
      <a href={icon.url}>
        <img
          className={
            icon.name === "Mongoose ODM"
              ? "h-8 w-16"
              : "h-8 w-8 lg:h-12 lg:w-12 xl:w-8 xl:h-8 "
          }
          src={icon.icon}
          alt={`${icon.name} icon`}
        />
      </a>

      <h3 className=" text-center text-sm font-roboto">{icon.name}</h3>
    </div>
  ));
};
