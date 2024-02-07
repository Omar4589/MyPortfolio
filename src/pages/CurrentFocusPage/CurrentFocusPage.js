import CurrentFocus from "../../components/CurrentFocus/CurrentFocus";
import { useThemeContext } from "../../utils/ThemeContext/ThemeContext";

const CurrentFocusPage = ({ children }) => {
  const { themeState } = useThemeContext();
  return (
    <div
      id="current-focus"
      className={`${
        themeState.name === "light"
          ? "bg-slate-100 text-zinc-950"
          : "bg-zinc-950 text-slate-100"
      }  w-full min-h-screen flex justify-center items-center"`}
    >
      <CurrentFocus />
    </div>
  );
};

export default CurrentFocusPage;
