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
    myRole: "Project Leader/Developer",
    description:
      "A community-driven platform designed to streamline the yard sale experience. The application eliminates the tedious need to drive around in search of yard sales by providing a centralized platform where users can find and list yard sales in their area.",
    madeWith: [],
    technologies: [
      "Node.js",
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "Apollo Server",
      "Apollo Client",
      "Graphql",
      "Jsonwebtoken",
      "Bcrypt",
      "Dotenv",
      "Dayjs",
      "Material-UI",
      "Reach Combobox",
      "Emailjs",
      "Cloudinary",
      "Google Maps SDK",
      "Use Places Auto Complete",
    ],
    roleAndResponsibilities: [
      "Project Leader / Developer",
      "Led server setup using Node.js and ExpressJS.",
      "Utilized React's context API for efficient global state management.",
      "Integrated GraphQL API, enhancing data querying and mutation processes.",
      "Implemented JWT to ensure secure user authentication.",
      "Facilitated the addition of an image upload feature using Cloudinary to improve user engagement.",
      "Styled components using Material-UI.",
      "Incorporated EmailJS in the 'Contact Us' page to facilitate user-to-admin communication.",
    ],
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
    name: "Meal Mappr",
    projectImage: m5,
    modalImage: m5,
    myRole: "Developer",
    description:
      "A digital meal planning application designed to simplify nutrition tracking. Offering a recipe search and save feature, enabling users to easily plan meals and monitor nutritional intake.",
    madeWith: [],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Handlebars.js",
      "Tailwind CSS",
      "Express-session",
      "Bcrypt",
      "jQuery",
      "Dotenv",
      "Dayjs",
      "Full Calendar",
      "Nodemailer",
    ],
    roleAndResponsibilities: [
      "Developer",
      "Structured RESTful API endpoints to extend app functionality.",
      "Integrated dynamic recipe search feature via 3rd party API to enrich user experience.",
      "Styled application elements with Tailwind CSS to enhance the user interface",
      "Implemented Nodemailer in the 'Contact Us' page to enable user messages to be sent to admins.",
    ],
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
    name: "Escape Me",
    projectImage: themes,
    modalImage: themes,
    myRole: "Sole Developer",
    description:
      "A customizable booking system initially designed for escape room businesses. Features an admin portal for management of bookings, users, and escape room details. Scalable for other business types.",
    madeWith: [],
    roleAndResponsibilities: [
      "Sole Developer",
      "Responsible for the end-to-end development.",
      "Set up the server architecture using Node.js and ExpressJS.",
      "Implemented Express Session middleware to ensure secure authentication and authorization.",
      "Utilized HandlebarsJS for efficient rendering of views.",
      "Established a MySQL database using Sequelize ORM to manage data storage.",
      "Crafted RESTful API endpoints to facilitate CRUD operations.",
      "Styled application using Tailwind CSS, focusing on a user-friendly interface.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Handlebars.js",
      "Tailwind CSS",
      "Express-session",
      "Bcrypt",
      "jQuery",
      "Dotenv",
      "Dayjs",
    ],
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
      id="project"
      key={project.name}
      className="rounded-2xl bg-black overflow-hidden shadow-lg h-48 my-3 mx-3 md:w-3/4 md:mx-auto md:mb-5 lg:w-10/12 lg:h-72 lg:mb-10 xl:w-11/12"
      onClick={() => onProjectClick(project)}
    >
      <h1 className="absolute mt-5 ml-5 text-2xl text-white text-shadow-lg lg:text-3xl">
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
