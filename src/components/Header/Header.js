import styles from "./styles";

import MaterialUISwitch from "./MaterialUISwitch";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const Header = () => {
  const { toggleThemeState } = useThemeContext();
  return (
    <div style={{ ...styles.main }}>
      <MaterialUISwitch
        sx={{ marginLeft: 2, marginTop: 2 }}
        onClick={toggleThemeState}
      />
    </div>
  );
};

export default Header;
