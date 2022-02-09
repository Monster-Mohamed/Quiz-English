import {Countdown} from "./CountDown.js";
import Home from "../../pages/Home.js";
import CheckChapters from "./CheckChapters.js";

// the chapter of the course
// if you determined the ended date you can increase the NEXTCHAPTER else uses that will be wrong
export let NEXTCHAPTER = 2;
export let CHAPTER = NEXTCHAPTER - 1;
export let CHAPTERFORTITLE = CHAPTER;
// end time
export let ended = "2/14/2022";
// the timer
export let timer = setTimeout(() => {
}, 1000);

const Counter = (dad: HTMLElement, msg: string) => {
    // this method End & Handling all the things of this counter
    const EndAll = async () => {
        clearInterval(timer);
        dad.querySelector("#counter")!.remove();
        CheckChapters();
        Home();
    };
    if (ended && new Date().getTime() < new Date(ended).getTime()) {
        // the logic for the next chapter timer
        const logic = () => {
            const {isEnd, days, hours, min, sec} = Countdown(ended);
            if (isEnd) {
                EndAll();
                return;
            }
            const counter = document.querySelector("#counter")!;
            counter.innerHTML =
                `
                <div class="counter">
                    ${msg} 
                    ${days !== 0 ? days + " days | " : ""}
                    ${hours < 10 ? hours !== 0 ? "0" + hours + " hours | " : "" : hours + " hours | "}
                    ${min < 10 ? min !== 0 ? "0" + min + " minutes |" : "" : min + " minutes | "}
                    ${sec < 10 ? "0" + sec : sec} seconds 
                    <span class="close">x</span>
                </div>
                `;
            const close = <HTMLButtonElement>document.querySelector(".counter .close");
            close.addEventListener("click", () => {
                dad.querySelector(".counter")!.remove();
                clearInterval(timer);
            });
        };
        // before timer
        logic();
        // timer
        timer = setInterval(() => {
            logic();
        }, 1000);
    } else if (localStorage.getItem(`chapter_${CHAPTER}`) == null && CHAPTER !== 0) {
        EndAll();
    }
};

export default Counter;