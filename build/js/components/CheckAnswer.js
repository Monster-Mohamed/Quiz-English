import { curr, increaseCurrPageBy1 } from "../pages/Levels.js";
export let rightAnswers = 0;
const CheckAnswer = (questions) => {
    const submit = document.querySelector(".submit-btn");
    submit.addEventListener("click", eo => {
        eo.preventDefault();
        // Get right answer
        let rightAnswer = questions[curr].right_a;
        // increase current index
        increaseCurrPageBy1();
        // check the answer
        check(rightAnswer);
        // Remove Previous Question
    });
    const check = (answer) => {
        const answers = document.getElementsByName("answer");
        let chosenAnswer = "";
        answers.forEach((el) => {
            if (el.checked) {
                chosenAnswer = el.dataset.answer;
            }
        });
        if (answer == chosenAnswer) {
            rightAnswers++;
            console.log(rightAnswers);
        }
    };
};
export default CheckAnswer;
//# sourceMappingURL=CheckAnswer.js.map