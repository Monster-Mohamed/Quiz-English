import createBullets from "../components/CreateBullets.js";
import QuizTemplate from "../components/QuizTemplate.js";
import AddQuestions from "../components/AddQuestions.js";
import NextQuestion from "../components/NextQuestion.js";
import CountDown from "../components/CountDown.js";
export let questionsCount;
export let curr = 0;
export let Level;
export const increaseCurrPageBy1 = () => {
    ++curr;
};
const Levels = (level) => {
    // add quiz html template
    Level = level;
    QuizTemplate(level);
    fetch(`https://monster-quiz-english-default-rtdb.firebaseio.com/level${Level}.json`)
        .then(res => res.json())
        .then(data => {
        questionsCount = data.length;
        data.sort(() => Math.random() - 0.5);
        // create bullets + set questions count
        createBullets();
        // Add Questions Data
        AddQuestions(data[curr]);
        // Start Countdown
        CountDown(120);
        // check right answer
        NextQuestion(data);
    });
};
export default Levels;
//# sourceMappingURL=Levels.js.map