import AboutMe from "../../components/AboutMe/AboutMe";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMePage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="about-me-page"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full min-h-screen flex justify-center items-center`}
    >
      <AboutMe />
    </div>
  );
};

export default AboutMePage;
