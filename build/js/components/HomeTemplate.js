import { CHAPTER } from "./NextChapter.js";
import { levels } from "./ShowButtons.js";
const HomeTemplate = (dad) => {
    dad.innerHTML = `
    <div class="counter"></div>
    <div class="parent-center">
        <h2 class="head1">English Quizzes Chapter ${CHAPTER}</h2>
        <div class="reset-btn">Reset Progress</div>
        ${levels}
    </div>
    `;
};
export default HomeTemplate;
//# sourceMappingURL=HomeTemplate.js.map