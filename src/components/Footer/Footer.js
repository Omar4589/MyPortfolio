import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";
import vince from "../../assets/images/vince.png";
import banksy from "../../assets/images/Banks.png";

const Footer = () => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="footer"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full pt-36 pb-3 "`}
    >
      <h1 className=" text-center text-md pt-24 font-robotoLight md:text-xl lg:text-2xl xl:text-xl">
        You've reached the end. Thank you for visiting! Enjoy a pixel art
        version of one of my favorite artworks.
      </h1>

      <div className="w-full relative mt-10">
        <a href={themeState.name === 'light' ? "https://www.banksy.co.uk/" : "https://www.vangoghmuseum.nl/en"}>
          <img
            alt="artwork"
            src={themeState.name === "dark" ? vince : banksy}
            className={`${themeState.name === 'light' ? "w-1/2": "w-2/3"} mx-auto`}
          />
        </a>

        <div
          class={`${
            themeState.name === "light"
              ? "from-slate-100 to-transparent "
              : "from-zinc-950 to-transparent "
          } h-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t`}
        ></div>
        <div
          class={`${
            themeState.name === "light" ? "" : "from-zinc-950 to-transparent "
          } h-6 absolute top-0 left-0 right-0 bg-gradient-to-b`}
        ></div>
      </div>

      <p className="text-center text-sm font-roboto pt-4">
        Made with ❤️ by Omar Zumaya
      </p>
      <p className="text-center text-xs font-roboto">
        Powered by React & Tailwind CSS
      </p>
    </div>
  );
};

export default Footer;
