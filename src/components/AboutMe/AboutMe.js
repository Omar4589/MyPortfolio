import styles from "./styles";
import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      style={{ background: themeState.background }}
      className="min-h-screen w-full mb-5 main "
    >
      <div className="flex flex-col items-center pb-5 ">
        <div className="w-3/4 py-5 md:absolute md:left-1/2 md:ml-8  md:w-1/3 lg:w-1/3 lg:ml-24 lg:mt-5 xl:w-1/4 xl:ml-44">
          <img
            id="about-me"
            src={portrait}
            alt="Omar"
            className="w-full rounded-lg"
          />
        </div>
        <div style={{ zIndex: 0 }} className="w-full md: md:pt-4 lg:pt-0 xl:pt-20">
          <h1 className="text-4xl font-bold mb-2 md:text-5xl">About Me</h1>
          <p className="text-lg mb-4 md:text-2xl md:w-1/2">
            I recently graduated from an intensive bootcamp at UTSA's School of
            Data Science where I honed my skills in the MERN stack, GraphQL, and
            MySQL. I'm eager to tackle real-world challenges and create
            innovative solutions in the tech industry.
          </p>
          <p className="text-lg md:text-2xl md:mt-10 lg:w-1/2 lg:mt-0">
            When I am not behind the screen coding 💻, you can find me indulging
            in my love for art 🖼️, exploring the world of anime, savoring a bowl
            of ramen 🍜, or delving into conspiracy theories that'll send you
            down a rabbit hole. 🕳️🐇 I am a creator at heart, ready to bring my
            unique blend of skills and passions to the tech world. Let's create
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
