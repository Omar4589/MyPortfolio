import portrait from "../../assets/images/portrait.JPG";

const AboutMe = () => {
  return (
    <div
      id="about-me-container"
      className="w-full relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between  items-center mx-6 md:mx-14 lg:mx-18 xl:mx-28 select-none space-y-2  md:space-y-4 mb-36"
    >
      <img
        id="about-me"
        src={portrait}
        alt="Omar"
        className="w-1/2 md:w-2/5 lg:w-1/4  rounded-full  lg:order-last"
      />

      <div
        id="aboutme"
        className="flex flex-col items-center md:items-start xl:items-center justify-center space-y-2  xl:space-y-4 order-3 lg:order-none lg:justify-between xl:justify-around lg:w-3/4"
      >
        <h1 className=" text-xl mt-6 md:text-2xl lg:text-3xl font-robotoBlack text-left lg:text-center w-full xl:w-2/5   lg:order-none">
          ABOUT ME
        </h1>

        <div className="mx-0  lg:mx-4 flex flex-col jusify-center  items-center space-y-2 xl:space-y-2 font-robotoLight leading-7 md:leading-7 lg:leading-9 xl:leading-0">
          <p className="text-base  md:text-lg  md:mx-2 leading-7 lg:text-lg  xl:text-base ">
            As a recent graduate stepping into the dynamic world of{" "}
            <span className="font-roboto">web and software development</span>,
            I've quickly learned that this field is not just about coding; it's
            about <span className="font-roboto">constant evolution</span>. My
            decision to embark on this journey was driven by my fascination with
            the ever-growing and ever-changing nature of{" "}
            <span className="font-roboto">technology</span>. It's a field that
            keeps you on your toes, pushing you to expand your skillsets and
            adapt to new challenges daily.
          </p>
          <p className="text-base  md:text-lg  md:mx-2 leading-7 lg:text-lg xl:text-base">
            I am someone who thrives on{" "}
            <span className="font-roboto">learning</span> and{" "}
            <span className="font-roboto">overcoming obstacles</span>. My love
            for acquiring new knowledge and my eagerness to be challenged are
            what fuel my passion for development. With a mindset geared towards{" "}
            <span className="font-roboto">problem-solving</span> and{" "}
            <span className="font-roboto">critical thinking</span>, I approach
            every project with the determination to find{" "}
            <span className="font-roboto">innovative solutions</span>.
          </p>

          <p className="text-base  md:text-lg  md:mx-2 leading-7 lg:text-lg xl:text-base">
            My work ethic is built on a foundation of{" "}
            <span className="font-roboto">self-motivation</span>,{" "}
            <span className="font-roboto">determination</span>, and{" "}
            <span className="font-roboto">flexibility</span>. I strive to be
            better every day, not just in my technical abilities but also in my
            capacity to{" "}
            <span className="font-roboto">collaborate and adapt</span> to the
            ever-changing demands of this field. If you're seeking someone who
            embodies the spirit of{" "}
            <span className="font-roboto">perseverance</span>,{" "}
            <span className="font-roboto">innovation</span>, and{" "}
            <span className="font-roboto">continuous improvement</span>, you've
            found the right person.
          </p>
          <p className="text-base  md:text-lg  md:mx-2 leading-7 lg:text-lg xl:text-base">
            In addition to my technical skills and work ethic, I bring to the
            table a unique blend of{" "}
            <span className="font-roboto">creativity</span> and{" "}
            <span className="font-roboto">analytical thinking</span>. My
            background in photography and my diverse interests outside of coding
            inform my approach to development, allowing me to tackle projects
            with a <span className="font-roboto">unique perspective</span>.
          </p>
          <p className="text-base  md:text-lg  md:mx-2 leading-7 lg:text-lg xl:text-base">
            I am excited to continue{" "}
            <span className="font-roboto">growing</span>,{" "}
            <span className="font-roboto">learning</span>, and{" "}
            <span className="font-roboto">contributing</span> to the development
            community. Let's build something great together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
