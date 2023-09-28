import styles from "./styles";
import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="about-me-container"
      style={{ background: themeState.background }}
      className="min-h-screen w-full mb-5 main "
    >
      <div className="md:flex lg:block xl:flex">
        <div className="w-full py-5 mx-auto md:w-1/2 lg:w-1/2 md:order-last lg:mt-5 lg:mb-12 ">
          <img
            id="about-me"
            src={portrait}
            alt="Omar"
            className="w-2/3 mx-auto  md:w-11/12 xl:w-3/4  rounded-xl"
          />
        </div>

        <div
          id="aboutme1"
          style={{ zIndex: 0 }}
          className="w-full md: md:pt-4 md:pr-4 lg:pl-0 md:my-auto lg:pt-0  xl:my-24"
        >
          <h1 className="text-3xl font-bold mb-2 md:text-4xl lg:text-5xl lg:mb-5 xl:text-4xl">
            About Me
          </h1>
          <p className="font-thin text-md mb-4 md:text-xl md:leading-9  lg:text-2xl lg:leading-10 xl:text-xl xl:leading-10">
            I recently graduated from an intensive bootcamp at UTSA's School of
            Data Science where I honed my skills in the MERN stack, GraphQL, and
            MySQL. I'm eager to tackle real-world challenges and create
            innovative solutions in the tech industry.
          </p>
        </div>
      </div>

      <div id="aboutme2" className="xl:w-2/3 xl:pr-7 xl:relative xl:bottom-60">
        <p className="font-thin text-md md:text-xl md:mt-5 md:leading-9  lg:mt-0 lg:text-2xl lg:leading-10 xl:text-xl xl:leading-10">
          When I am not behind the screen coding 💻, you can find me indulging
          in my love for art 🖼️, exploring the world of anime, savoring a bowl
          of ramen 🍜, or delving into conspiracy theories that'll send you down
          a rabbit hole. 🕳️🐇 I am a creator at heart, ready to bring my unique
          blend of skills and passions to the tech world. Let's create something
          amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
