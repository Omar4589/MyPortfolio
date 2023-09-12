import styles from "./styles";
import MaterialUISwitch from "./MaterialUISwitch";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Hamburger from "../HamburgerMenu/Hamburger";

const Header = () => {
  const { toggleThemeState } = useThemeContext();
  return (
    <header id="header" style={{ ...styles.main }}>
      <MaterialUISwitch
        sx={{ marginLeft: 2, marginTop: 2, zIndex: 2 }}
        onClick={toggleThemeState}
      />
      <Hamburger />
    </header>
  );
};

export default Header;
