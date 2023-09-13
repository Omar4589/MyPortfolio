import githubIcon from "../../assets/svgs/github.svg";
import githubWhiteIcon from "../../assets/svgs/githubWhite.svg";

import yg2 from "../../assets/images/yg2.png";
import m5 from "../../assets/images/M5.png";
import themes from "../../assets/images/themes.jpg";
import ygLogo from "../../assets/images/logo1.PNG";
import ygAppName from "../../assets/images/YGappName.png";
import greenYardGems from "../../assets/images/greenYardGems.PNG";

export const projectObjects = [
  {
    name: "YardGems",
    projectImage: yg2,
    modalImage: greenYardGems,
    description:
      "YardGems is a community-driven platform designed to bring enthusiasts and sellers together in a vibrant, user-friendly marketplace. Find hidden gems in your neighborhood or list your own treasures to share with others.",
    madeWith: [],
    features: [
      {
        featureName: "Intuitive UI/UX",
        featureDescription:
          "  Leveraging the power of React and Material UI, integrated with Google Maps, to offer users a seamless and visually pleasing browsing experience.",
      },
      {
        featureName: "Robust Backend",
        featureDescription:
          "Built on a solid foundation using Node, Express, and Apollo Server, ensuring stability and efficiency.",
      },
      {
        featureName: "Secure User Authentication",
        featureDescription:
          "Implementing JWT for a secure and reliable user authentication process.",
      },
      {
        featureName: "Optimized Data Management",
        featureDescription:
          " Utilizing GraphQL for efficient data querying and manipulation and MongoDB for reliable database solutions.",
      },
      {
        featureName: "Image Uploads",
        featureDescription:
          "Facilitating easy image uploads using Multer and Cloudinary, enhancing the visual appeal of listings.",
      },
    ],
    github: "https://github.com/Omar4589/YardGems",
    url: "https://yardgems-15b0faee737f.herokuapp.com/",
  },
  {
    name: "MealMappr",
    projectImage: m5,
    modalImage: ygLogo,
    description: "",
    madeWith: [],
    features: [{ featureName: "", featureDescription: "" }],
    github: "https://github.com/Rolyat512/MealMappr",
    url: "https://mealmappr.herokuapp.com/",
  },
  {
    name: "EscapeMe",
    projectImage: themes,
    modalImage: ygLogo,
    description: "",
    madeWith: [],
    features: [{ featureName: "", featureDescription: "" }],
    github: "https://github.com/Omar4589/Escape-Me",
    url: "https://escape-me.herokuapp.com/",
  },
];

export const displayProjects = (projects, onProjectClick) => {
  return projects.map((project) => (
    <div
      key={project.name}
      className="rounded-2xl bg-black overflow-hidden shadow-lg h-48 my-5 "
      onClick={() => onProjectClick(project)}
    >
      <h1 className="absolute mt-5 ml-5 text-3xl text-white text-shadow-lg">
        {project.name}
      </h1>
      <img
        src={project.projectImage}
        alt="project"
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
  ));
};
