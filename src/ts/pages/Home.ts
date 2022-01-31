import Levels from "./Levels.js";

const Home = () => {
    const dad = <HTMLElement>document.getElementById("root");
    dad.innerHTML = `
    <div class="parent-center">
        <h1 class="head1">English Course</h1>
        <div data-level="1" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 1
        </div>
        <div data-level="2" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 2
        </div>
        <div data-level="3" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 3
        </div>
        <div data-level="4" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 4
        </div>
        <div data-disable="true" data-level="4" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 5
        </div>
        <div data-disable="true" data-level="4" class="main-btn levels">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Level 6
        </div>
    </div>
    `;

    const levelsButtons = document.querySelectorAll(".levels") as NodeListOf<HTMLButtonElement>;
    levelsButtons.forEach((btn: HTMLButtonElement) => {
        btn.addEventListener("click", () => {
            if (!btn.getAttribute("data-disable")) {
                Levels(btn.getAttribute("data-level")!);
            }
        });
    });
};

export default Home;