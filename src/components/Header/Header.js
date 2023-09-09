import styles from "./styles";
import MaterialUISwitch from "./MaterialUISwitch";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Hamburger from "../Hamburger/Hamburger";

const Header = () => {
  const { toggleThemeState } = useThemeContext();
  return (
    <div style={{ ...styles.main }}>
      <MaterialUISwitch
        sx={{ marginLeft: 2, marginTop: 2, zIndex: 2 }}
        onClick={toggleThemeState}
      />
      <Hamburger />
    </div>
  );
};

export default Header;
