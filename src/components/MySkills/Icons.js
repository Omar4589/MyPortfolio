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

export const frontEndIconsLightTheme = [
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
    name: "GitHub",
    icon: githubIcon,
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
    name: "GitHub",
    icon: githubIcon,
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
      <img className="h-12 w-12 mx-auto" src={icon.icon} alt={`${icon.name} icon`} />
      <h3 className="font-thin text-center text-sm">{icon.name}</h3>
    </div>
  ));
};
