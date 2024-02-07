import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="about-me-container"
      className="w-full relative z-10 flex justify-around items-center mx-24 select-none"
    >
      <div id="aboutme" className="flex flex-col w-2/3 space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  xl:text-3xl font-robotoBlack text-center">
          About Me
        </h1>

        <div className="mx-4 flex flex-col jusify-center items-center space-y-4 font-robotoLight">
          <p className="text-md  md:text-xl md:leading-9  lg:text-2xl lg:leading-10 xl:text-xl xl:leading-10">
            Fresh out of UTSA's School of Data Science, I've earned a
            certificate in{" "}
            <span className="font-robotoM">Full Stack Web Development</span>. My
            studies concentrated on the development of powerful backends using{" "}
            <span className="font-robotoM">Node</span> and{" "}
            <span className="font-robotoM">Express</span>, seamlessly integrated
            with client-facing web applications through popular libraries and
            frameworks like  <span className="font-robotoM">React</span> and  <span className="font-robotoM">Tailwind CSS</span>. This comprehensive curriculum
            has equipped me with the skills to build secure, efficient, and
            user-friendly web solutions. <span className="font-robotoM">Now, I'm eager to tackle real-world
            challenges and create innovative solutions in the tech industry! 👨🏻‍💻</span>
          </p>
        </div>
      </div>

      <img
        id="about-me"
        src={portrait}
        alt="Omar"
        className=" xl:w-1/4  rounded-xl"
      />
    </div>
  );
};

export default AboutMe;
