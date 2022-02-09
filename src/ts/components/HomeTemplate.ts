import {CHAPTERFORTITLE} from "./Counters/Counter.js";
import {levels} from "./ShowButtons.js";
import ChaptersDegrees from "./Chapters/ChaptersDegrees.js";

const HomeTemplate = (dad: HTMLElement) => {
    document.querySelector("title")!.innerText = `Monster Quizzes | Chapter ${CHAPTERFORTITLE}`;
    dad.innerHTML = `
    <div id="counter"></div>
    <div id="chapters"></div>
    <div class="parent-center">
        <h2 class="head1">English Quizzes Chapter ${CHAPTERFORTITLE}</h2>
        <div class="reset-btn">Reset Progress</div>
        <div class="chapters-btn">Chapters Progress</div>
        ${levels}
    </div>
    `;

    const chaptersBtn = document.querySelector(".chapters-btn") as HTMLButtonElement;
    chaptersBtn.addEventListener("click", () => {
        ChaptersDegrees();
    });
};

export default HomeTemplate;