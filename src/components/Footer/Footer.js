import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import vince from "../../assets/images/vince.png";
import banksy from "../../assets/images/Banks.png";
import banksy2 from "../../assets/images/Banks3.png"

const Footer = () => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="footer"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full flex flex-col justify-end items-center pb-4 h-3/4 lg:h-screen px-3 md:px-0`}
    >
      <h1 className=" text-center text-base font-robotoLight md:text-xl  mx-6">
        You've reached the end. Thank you for visiting!
      </h1>

      <div className="w-full relative mt-10">
        <a href={themeState.name === 'light' ? "https://www.banksy.co.uk/" : "https://www.vangoghmuseum.nl/en"}>
          <img
            alt="artwork"
            src={themeState.name === "dark" ? vince : banksy2}
            className={`${themeState.name === 'light' ? "w-2/3 lg:w-2/3 xl:w-1/2": "w-full xl:w-3/4 md:w-11/12"} mx-auto`}
          />
        </a>

        <div
          className={`${
            themeState.name === "light"
              ? ""
              : "from-zinc-950 to-transparent "
          } h-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t`}
        ></div>
        <div
          className={`${
            themeState.name === "light" ? "" : "from-zinc-950 to-transparent "
          } h-6 absolute top-0 left-0 right-0 bg-gradient-to-b`}
        ></div>
      </div>

      <p className="text-center text-xs font-roboto pt-4 xl:pt-0">
        Made with ❤️ by Omar Zumaya
      </p>
      <p className="text-center text-xxs font-roboto">
        Powered by React & Tailwind CSS
      </p>
    </div>
  );
};

export default Footer;
