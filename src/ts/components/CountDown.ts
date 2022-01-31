import {curr, questionsCount} from "../pages/Levels.js";

export let counter: any;
const CountDown = (duration: number) => {
    if (curr < +questionsCount) {
        let min, sec;
        const countdownEle = document.querySelector(".count-down")!;
        const submit = <HTMLButtonElement>document.querySelector(".submit-btn");
        counter = setInterval(function () {
            min = Math.floor(duration / 60);
            sec = Math.floor(duration % 60);
            min = min < 10 ? `0${min}` : min;
            sec = sec < 10 ? `0${sec}` : sec;
            countdownEle.innerHTML = `${min}:${sec}`;
            if (--duration < 0) {
                clearInterval(counter);
                submit.click();
            }
        }, 1000);
    }
};

export default CountDown;