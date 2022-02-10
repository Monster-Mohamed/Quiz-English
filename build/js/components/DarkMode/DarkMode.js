import DarkTheme from "./DarkTheme.js";

export let ThemeMode = localStorage.getItem("theme") !== null
    ? !localStorage.getItem("theme") : "light";
export const ChangeTheme = () => {
    ThemeMode = ThemeMode == "light" ? "dark" : "light";
    localStorage.setItem("theme", ThemeMode);
};
const DarkMode = () => {
    DarkTheme();
};
export default DarkMode;
//# sourceMappingURL=Themes.js.map