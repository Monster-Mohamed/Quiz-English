import { Countdown } from "./CountDown.js";
export let CHAPTER = 1;
export const ended = "2/12/2022";
export let timer = setTimeout(() => {
}, 1000);
const NextChapter = (dad) => {
    if (ended && new Date().getTime() < new Date(ended).getTime()) {
        // the logic for the next chapter timer
        const logic = () => {
            const { isEnd, days, hours, min, sec } = Countdown(ended);
            if (isEnd) {
                clearInterval(timer);
                dad.querySelector(".counter").remove();
                CHAPTER++;
                localStorage.clear();
                return;
            }
            const counter = document.querySelector(".counter");
            counter.innerHTML = `We will go to the next chapter after 
            ${days !== 0 ? days + " days | " : ""}
            ${hours < 10 ? hours !== 0 ? "0" + hours + " hours | " : "" : hours + " hours | "}
            ${min < 10 ? min !== 0 ? "0" + min + " minutes |" : "" : min + " minutes | "}
            ${sec < 10 ? "0" + sec : sec} seconds
            <span class="close">x</span>
            `;
            const close = document.querySelector(".counter .close");
            close.addEventListener("click", () => {
                dad.querySelector(".counter").remove();
                clearInterval(timer);
            });
        };
        // before timer
        logic();
        // timer
        timer = setInterval(() => {
            logic();
        }, 1000);
    }
};
export default NextChapter;
//# sourceMappingURL=NextChapter.js.map