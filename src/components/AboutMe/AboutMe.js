import styles from "./styles";
import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      style={{ background: themeState.background }}
      className="min-h-screen w-full  mb-5 main "
    >
      <div className="flex flex-col items-center pb-5 ">
        <div className="w-full">
          <img
            id="about-me"
            src={portrait}
            alt="Omar"
            className="rounded-full w-full py-5 mx-auto"
          />
        </div>
        <div style={{ zIndex: 0 }} className="w-full ">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg mb-4">
            Hi! I'm Omar. I recently graduated from an intensive bootcamp at
            UTSA's School of Data Science where I honed my skills in the MERN
            stack, GraphQL, and MySQL. I'm eager to tackle real-world challenges
            and create innovative solutions in the tech industry.
          </p>
          <p className="text-lg">
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
