import styles from "./styles";
import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      style={{ background: themeState.background }}
      className="min-h-screen w-full p-5 mb-5 main "
    >
      <div className="flex flex-col md:flex-row items-center pb-5 ">
        <div className="w-full md:w-1/3">
          <img
            src={portrait}
            alt="Omar"
            className="rounded-full w-full md:w-3/4 mx-auto"
          />
        </div>
        <div style={{ zIndex: 0 }} className="w-full md:w-2/3 md:pl-5  ">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hi, I'm Omar, a junior developer with a love for technology so great
            that it's driven me to dive deep into the world of web development.
          </p>
          <p className="text-lg mb-4">
            Fresh from completing an intensive bootcamp at UTSA's School of Data
            Science, I'm equipped with a rich skill set in the MERN stack,
            GraphQL, and MySQL, ready to tackle challenges and create innovative
            solutions in the tech industry.
          </p>
          <p className="text-lg mb-4">
            With a foundation in various technologies and a knack for quick
            learning, I am ready to contribute and grow in this vibrant field.
          </p>
          <p className="text-lg">
            When I am not coding💻, I am indulging in my love for art 🖼️,
            exploring the world of anime, eating ramen somewhere 🍜, or delving
            into conspiracy theories that'll send you down a rabbit hole. 🕳️🐇 I
            am a creator at heart, ready to bring my unique blend of skills and
            passions to the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
