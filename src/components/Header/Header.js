import styles from "./styles";
import MaterialUISwitch from "./MaterialUISwitch";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import Hamburger from "../HamburgerMenu/Hamburger";

const Header = () => {
  const { themeState, toggleThemeState } = useThemeContext();
  return (
    <header
      id="header"
      className="fixed w-full z-20 flex justify-between lg:px-20 xl:px-24"
    >
      <div className="flex">
        <MaterialUISwitch
          sx={{ zIndex: 2 }}
          onClick={toggleThemeState}
          className="ml-4 mt-4 md:ml-7 md:mt-7 lg:ml-0  xl:mt-8"
        />
        {themeState.name === 'light' && (
          <div className="flex items-center mt-7">
            &#8592; Click here if you're a 🧛
          </div>
        )}
      </div>

      <Hamburger />
    </header>
  );
};

export default Header;
