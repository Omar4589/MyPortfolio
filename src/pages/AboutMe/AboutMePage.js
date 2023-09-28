import AboutMe from "../../components/AboutMe/AboutMe";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const AboutMePage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="about-me-page"
      style={{ background: themeState.background }}
      className="w-full min-h-screen px-6 pt-60 pb-10 md:px-10 xl:px-20"
    >
      <AboutMe />
    </div>
  );
};

export default AboutMePage;
