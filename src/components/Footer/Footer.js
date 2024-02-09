import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import vince from "../../assets/images/vince.png";
import banksy from "../../assets/images/Banks.png";
import banksy2 from "../../assets/images/Banks3.png";
import LandingIcons from "../LandingIcons/LandingIcons";
import { lightIcons, darkIcons } from "../LandingIcons/iconsLanding";

const Footer = () => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="footer"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      } w-full flex flex-col justify-end items-center h-1/6 relative z-20`}
    >
      <div className="w-full bg-zinc-950 text-slate-100 h-full flex flex-col justify-end pb-3 shadow shadow-zinc-700">
        <LandingIcons
          width={"w-full"}
          itemsStyle={"items-center"}
          lightIcons={lightIcons}
          darkIcons={darkIcons}
          compName={"footer"}
        />
        <p className="text-center text-xs font-roboto pt-4 xl:pt-0 select-none">
          Made with ❤️ by Omar Zumaya
        </p>
        <p className="text-center text-xxs font-roboto select-none">
          Powered by React & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Footer;
