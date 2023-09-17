import styles from "./styles";
import MaterialUISwitch from "./MaterialUISwitch";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Hamburger from "../HamburgerMenu/Hamburger";

const Header = () => {
  const { toggleThemeState } = useThemeContext();
  return (
    <header id="header" style={{ ...styles.main }}>
      <MaterialUISwitch
        sx={{  zIndex: 2 }}
        onClick={toggleThemeState}
        className="ml-4 mt-4 md:ml-7 md:mt-7 xl:ml-10 xl:mt-8"
      />
      <Hamburger />
    </header>
  );
};

export default Header;
