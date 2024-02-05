import githubIcon from "../../assets/svgs/github.svg";
import githubWhiteIcon from "../../assets/images/githubWhite.png";

import yg2 from "../../assets/images/yg2.png";
import m5 from "../../assets/images/M5.png";
import themes from "../../assets/images/themes.jpg";
import ygLogo from "../../assets/images/logo1.PNG";
import ygAppName from "../../assets/images/YGappName.png";
import greenYardGems from "../../assets/images/greenYardGems.PNG";

import MyMeal from "../../assets/mealMappr/MyMeal.png";
import ContactUs from "../../assets/mealMappr/ContactUs.png";
import Home from "../../assets/mealMappr/Home.png";
import LogIn from "../../assets/mealMappr/LogIn.png";
import MyRecipes from "../../assets/mealMappr/Recipes.png";
import Settings from "../../assets/mealMappr/Settings.png";
import SignUp from "../../assets/mealMappr/SignUp.png";
import Welcome from "../../assets/mealMappr/Welcome.png";

import yardgems1 from "../../assets/yardGemsScreenshots/1.png";
import yardgems2 from "../../assets/yardGemsScreenshots/2.png";
import yardgems3 from "../../assets/yardGemsScreenshots/3.png";
import yardgems4 from "../../assets/yardGemsScreenshots/4.png";
import yardgems5 from "../../assets/yardGemsScreenshots/5.png";
import yardgems6 from "../../assets/yardGemsScreenshots/6.png";
import yardgems7 from "../../assets/yardGemsScreenshots/7.png";
import yardgems8 from "../../assets/yardGemsScreenshots/8.png";
import yardgems9 from "../../assets/yardGemsScreenshots/9.png";
import yardgems10 from "../../assets/yardGemsScreenshots/10.png";
import yardgems11 from "../../assets/yardGemsScreenshots/11.png";
import yardgems12 from "../../assets/yardGemsScreenshots/12.png";
import yardgems13 from "../../assets/yardGemsScreenshots/13.png";
import yardgems14 from "../../assets/yardGemsScreenshots/14.png";
import yardgems15 from "../../assets/yardGemsScreenshots/15.png";

import welcomepage from "../../assets/escapeMe/Welcome.png";
import confirmationpage from "../../assets/escapeMe/Confirmation.png";
import Contactuspage from "../../assets/escapeMe/ContactUs.png";
import escaperoomspage from "../../assets/escapeMe/EscapeRooms.png";
import myaccountpage from "../../assets/escapeMe/MyAccount.png";
import mybookingspage from "../../assets/escapeMe/MyBookings.png";
import signuppage from "../../assets/escapeMe/SignUp.png";
import loginpage from "../../assets/escapeMe/LogIn.png";
import userhomepage from "../../assets/escapeMe/UserHome.png";
import bookingpage from "../../assets/escapeMe/bookingpage.png";

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
      "Emailjs",
      "Cloudinary",
      "Google Maps",
      "Use Places Auto Complete Library",
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
    screenshots: [
      {
        img: yardgems1,
        caption: "Launch Screen",
      },

      {
        img: yardgems2,
        caption: "Home - Map View",
      },

      {
        img: yardgems3,
        caption: "Map View - Info Window",
      },

      {
        img: yardgems4,
        caption: " Listing Modal",
      },

      {
        img: yardgems5,
        caption: "Home - List View",
      },

      {
        img: yardgems6,
        caption: "Sign Up Page",
      },

      {
        img: yardgems7,
        caption: "Sign In Page",
      },

      {
        img: yardgems8,
        caption: "My Listings",
      },

      {
        img: yardgems9,
        caption: "Create Listing Modal",
      },

      {
        img: yardgems10,
        caption: "Saved Listings",
      },
      {
        img: yardgems11,
        caption: "Menu Drawer",
      },

      {
        img: yardgems12,
        caption: "My Account",
      },

      {
        img: yardgems13,
        caption: "Contact Us",
      },
      {
        img: yardgems14,
        caption: "About Us",
      },

      {
        img: yardgems15,
        caption: "FAQ",
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
    screenshots: [
      {
        img: Welcome,
        caption: "Welcome Screen",
      },

      {
        img: SignUp,
        caption: "SignUp Screen",
      },
      {
        img: LogIn,
        caption: "LogIn Screen",
      },

      {
        img: Home,
        caption: "Home Screen",
      },
      {
        img: MyMeal,
        caption: "Meal Input Screen",
      },
      {
        img: MyRecipes,
        caption: "MyRecipes Screen",
      },

      {
        img: Settings,
        caption: "Settings Screen",
      },

      {
        img: ContactUs,
        caption: "ContactUs Screen",
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
      "A customizable booking system initially designed for escape room businesses. Scalable for other business types.",
    madeWith: [],
    roleAndResponsibilities: [
      "Sole Developer",
      "Responsible for the end-to-end development.",
      "Set up the server architecture using Node.js and ExpressJS.",
      "Utilized React's context API for efficient global state management.",
      "Integrated GraphQL API, enhancing data querying and mutation processes.",
      "Implemented JWT to ensure secure user authentication.",
      "Established a MySQL database using Sequelize ORM to manage data storage.",
      "Styled application using Tailwind CSS, focusing on a user-friendly interface.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React",
      "MySQL",
      "Sequelize",
      "Tailwind CSS",
      "Apollo Server",
      "Apollo Client",
      "Graphql",
      "Jsonwebtoken",
      "Bcrypt",
      "Dotenv",
      "Dayjs",
      "Emailjs",
      "Google Maps",
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
    screenshots: [
      {
        img: welcomepage,
        caption: "Welcome Screen",
      },

      {
        img: signuppage,
        caption: "SignUp Screen",
      },
      {
        img: loginpage,
        caption: "LogIn Screen",
      },
      {
        img: escaperoomspage,
        caption: "Escape Rooms Screen",
      },

      {
        img: userhomepage,
        caption: "User Home Screen",
      },
      {
        img: bookingpage,
        caption: "Booking Screen",
      },
      {
        img: confirmationpage,
        caption: "Booking Confirmation Screen",
      },
      {
        img: mybookingspage,
        caption: "My Bookings Screen",
      },
      {
        img: myaccountpage,
        caption: "My Account Screen",
      },

      {
        img: Contactuspage,
        caption: "Contact Us Screen",
      },
    ],
    github: "https://github.com/Omar4589/EscapeMe",
    url: "https://escapeme-62de0a91bfcf.herokuapp.com/",
  },
];

export const displayProjects = (projects, onProjectClick) => {
  return projects.map((project) => (
    <div
      id="project"
      key={project.name}
      className="rounded-2xl bg-black overflow-hidden shadow-lg h-48 my-3 mx-3 md:w-3/4 md:mx-auto md:mb-5 lg:w-10/12 lg:h-72 lg:mb-10 xl:w-11/12 cursor-pointer"
      onClick={() => onProjectClick(project)}
    >
      <h1
        className={`font-robotoBlack absolute mt-5 ml-5 text-2xl  lg:text-3xl ${
          project.name === "YardGems"
            ? "text-green-500  drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
            : project.name === "Meal Mappr"
            ? "text-blue-600  drop-shadow-[0_3px_2px_rgba(0,0,0,0.1)]"
            : "text-slate-100 drop-shadow-[0_3px_2px_rgba(0,0,0)]"
        }`}
      >
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
