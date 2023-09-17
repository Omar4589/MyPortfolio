import githubIcon from "../../assets/svgs/github.svg";
import githubWhiteIcon from "../../assets/images/githubWhite.png";

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
    modalImage: m5,
    description:
      "Meal Planner is your go-to free and user-friendly app, facilitating personalized meal plans to foster a healthier and happier lifestyle. The app is a testament to our dedication to making meal planning a breeze, helping users save time, money, and effort. Join our growing community and embark on a journey towards a simplified and enjoyable meal planning experience.",
    madeWith: [],
    features: [
      {
        featureName: "User-Friendly Interface",
        featureDescription:
          "Designed with Tailwind CSS, offering a clean and modern UI that makes meal planning a simple and enjoyable task.",
      },
      {
        featureName: "Personalized Meal Plans",
        featureDescription:
          "Create and manage your meal plans effortlessly, with the added functionality of viewing your plans on a full calendar.",
      },
      {
        featureName: "Secure Sessions",
        featureDescription:
          "Utilizing express-session to maintain secure and persistent sessions for a reliable user experience.",
      },
      {
        featureName: "Robust Backend",
        featureDescription:
          "Powered by a Node.js and Express server backend, coupled with MySQL for reliable and efficient data management.",
      },
    ],
    github: "https://github.com/Rolyat512/MealMappr",
    url: "https://mealmappr.herokuapp.com/",
  },
  {
    name: "EscapeMe",
    projectImage: themes,
    modalImage: themes,
    description:
      "EscapeMe serves as a one-stop solution for escape room enthusiasts, offering a seamless booking experience right at your fingertips. Users can create an account to book their next adventure, choosing from a variety of escape rooms for a date and time that suits them. The platform also caters to administrators, providing a comprehensive admin center to manage escape rooms, users, and bookings efficiently. Join the community and elevate your escape room experience with EscapeMe.",
    madeWith: [],
    features: [
      {
        featureName: "Modern UI/UX",
        featureDescription:
          "Leveraging Tailwind CSS to offer a modern and clean user interface, enhancing the user experience with intuitive design.",
      },
      {
        featureName: "User-Friendly Booking System",
        featureDescription:
          "Allows users to easily book their preferred escape room adventure at a date and time of their choosing, with just a few clicks.",
      },
      {
        featureName: "Personalized User Accounts",
        featureDescription:
          "Users can create personalized accounts to manage their bookings and keep track of their upcoming adventures.",
      },
      {
        featureName: "Admin Center",
        featureDescription:
          "A dedicated admin center for efficient management of escape rooms, user accounts, and bookings, ensuring a smooth operational flow.",
      },
      {
        featureName: "Robust Backend",
        featureDescription:
          "Built with a Node.js and Express server backend, integrated with MySQL for reliable and secure data management.",
      },
    ],
    github: "https://github.com/Omar4589/Escape-Me",
    url: "https://escape-me.herokuapp.com/",
  },
];

export const displayProjects = (projects, onProjectClick) => {
  return projects.map((project) => (
    <div
      key={project.name}
      className="rounded-2xl bg-black overflow-hidden shadow-lg h-48 my-5 md:h-60"
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
