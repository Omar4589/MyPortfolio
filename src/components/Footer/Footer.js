import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const Footer = () => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="footer"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full pt-36 pb-3 px-5 md:px-10 lg:px-14"`}
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
