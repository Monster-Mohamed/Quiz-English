import { ChangeTheme } from "./Theme.js";
const DarkTheme = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
    const themeBtn = document.querySelector("#theme");
    themeBtn.addEventListener("click", () => {
        ChangeTheme();
    });
};
export default DarkTheme;
//# sourceMappingURL=DarkTheme.js.map