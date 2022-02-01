import Levels from "./Levels.js";
const Home = () => {
    const dad = document.getElementById("root");
    let levels = "";
    for (let i = 1; i <= 4; i++) {
        const progress = window.localStorage.getItem(`progress${i}`);
        const check = !!progress;
        levels +=
            `
            <div data-level="${i}" class="main-btn levels">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="txt">Level ${i}</p>
                <div class="box">
                     ${check && +progress === 100
                ? "<img alt='completed' class='completed' src='https://cdn-icons-png.flaticon.com/128/716/716225.png' >"
                : `
                        <div class="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <!--  put the percent value in this place calc( 440 - (440 * value) / 100) -->
                                <circle style="stroke-dashoffset: calc(440 - (440 * ${check ? progress : 0}) / 100);" cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div class="number">
                                <h2>${check ? progress : "0.0"}<p>%<p/></h2>
                            </div>
                        </div>
                        `}
                </div>
            </div>
            `;
    }
    dad.innerHTML = `
    <div class="parent-center">
        <h2 class="head1">English Quizzes</h2>
        <div class="reset-btn">Reset Progress</div>
        ${levels}
    </div>
    `;
    const levelsButtons = document.querySelectorAll(".levels");
    levelsButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (!btn.getAttribute("data-disable")) {
                Levels(btn.getAttribute("data-level"));
            }
        });
    });
    const resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", () => {
        const reset = confirm("Are you sure? \n You want to reset all the progress of quizzes");
        reset && window.localStorage.clear();
        Home();
    });
};
export default Home;
//# sourceMappingURL=Home.js.map