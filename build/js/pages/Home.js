var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Levels from "./Levels.js";
const Home = () => __awaiter(void 0, void 0, void 0, function* () {
    const dad = document.getElementById("root");
    let levels = "";
    for (let i = 1; i <= 5; i++) {
        const progress = window.localStorage.getItem(`progress${i}`);
        const check = !!progress;
        yield fetch(`https://monster-quiz-english-default-rtdb.firebaseio.com/level${i}.json`)
            .then(res => res.json())
            .then(data => {
            let count = data.length;
            levels +=
                `
            <div ${i === 5 && "data-disable='true'"} data-level="${i}" class="main-btn levels">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="txt">Level ${i}</p>
                <p class="questions-count">Questions: ${count}</p>
                <div class="box">
                     ${check && +progress === 100
                    ? "<img alt='completed' class='completed' src='../../images/checked.png' >"
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
        });
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
        // @ts-ignore
        cuteAlert({
            type: "question",
            title: "Are you sure?",
            message: "You want to reset all the progress of quizzes",
            img: "img/question.svg",
            confirmText: "Reset all",
            cancelText: "Cancel"
        }).then((e) => {
            if (e == ("confirm")) {
                // if the user is confirmed
                window.localStorage.clear();
                Home();
                // @ts-ignore
                cuteToast({
                    type: "success",
                    message: "The progresses of all levels reset successfully",
                    img: "img/success.svg",
                    timer: 5000
                });
            }
        });
    });
});
export default Home;
//# sourceMappingURL=Home.js.map