import portrait from "../../assets/images/portrait.JPG";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMe = () => {
  const { themeState } = useThemeContext();

  return (
    <div
      id="about-me-container"
      className="w-full relative z-10 flex lg:flex-wrap flex-col lg:flex-row justify-center items-center mx-6 md:mx-14 lg:mx-16 xl:mx-32 select-none order-last space-y-2  md:space-y-4 lg:-space-y-96 xl:-space-y-ctom"
    >
      <h1 className=" text-xl mt-6 md:text-2xl lg:text-3xl font-robotoBlack text-left lg:text-center w-full xl:w-2/5 order-2  lg:order-none">
        ABOUT ME
      </h1>

      <div
        id="aboutme"
        className="flex  flex-col lg:flex-row items-center md:items-start xl:items-center justify-center  lg:space-y-0 xl:space-y-4 order-3 lg:order-none xl:justify-around lg:w-3/4"
      >
        <div className="mx-4 md:mx-0 lg:mx-4 flex flex-col jusify-center  items-center space-y-4 font-robotoLight w-full md:order-2">
          <p className="text-lg mx-2 leading-7 md:leading-9  lg:text-lg lg:leading-10 xl:text-xl xl:leading-10">
            Fresh out of UTSA's School of Data Science, I've earned a
            certificate in{" "}
            <span className="font-robotoM">Full Stack Web Development</span>. My
            studies concentrated on the development of powerful backends using{" "}
            <span className="font-robotoM">Node</span> and{" "}
            <span className="font-robotoM">Express</span>, seamlessly integrated
            with client-facing web applications through popular libraries and
            frameworks like <span className="font-robotoM">React</span> and{" "}
            <span className="font-robotoM">Tailwind CSS</span>. This
            comprehensive curriculum has equipped me with the skills to build
            secure, efficient, and user-friendly web solutions.{" "}
            <span className="font-robotoM">
              Now, I'm eager to tackle real-world challenges and create
              innovative solutions in the tech industry! 👨🏻‍💻
            </span>
          </p>
        </div>
      </div>

      <img
        id="about-me"
        src={portrait}
        alt="Omar"
        className="w-1/2 md:w-1/3 lg:w-1/4  rounded-full order-1   lg:order-none"
      />
    </div>
  );
};

export default AboutMe;
