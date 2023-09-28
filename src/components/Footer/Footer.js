import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import styles from "./styles";

const Footer = () => {
  const { themeState } = useThemeContext();
  return (
    <div
    id="footer"
      style={{ ...styles.main, backgroundColor: themeState.background }}
      className="w-full pt-36 pb-3 px-5 md:px-10 lg:px-14"
    >
      <h1 className="font-thin text-center text-md py-24 font-bold md:text-xl lg:text-2xl xl:text-xl">
        You've reached the end! Thank you for visiting!
      </h1>
      <p className="text-center text-sm">Made with ❤️ by Omar Zumaya</p>{" "}
      <p className="text-center text-xs">Powered by React & Tailwind CSS</p>
    </div>
  );
};

export default Footer;
