import { ChangeTheme } from "./DarkMode.js";
const DarkTheme = () => {
    // if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //     const body = document.querySelector("body")!;
    //     body.classList.add("dark");
    // }
    const themeBtn = document.querySelector("#theme");
    themeBtn.addEventListener("click", () => {
        ChangeTheme();
    });
};
export default DarkTheme;
//# sourceMappingURL=DarkTheme.js.map