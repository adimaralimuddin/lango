import { useTheme } from "next-themes";
import Icon from "../components/elements/Icon";

export default function useTheming() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () =>
    theme == "dark" ? setTheme("light") : setTheme("dark");

  return {
    toggleTheme,
    currentTheme,
    theme,
  };
}

export function ThemeButton() {
  const { toggleTheme, theme } = useTheming();
  return (
    <button onClick={toggleTheme}>
      <Icon className=" text-2xl ">{theme === "dark" ? "sun" : "moon"}</Icon>
    </button>
  );
}
