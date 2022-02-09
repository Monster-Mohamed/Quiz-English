import NextChapter, {CHAPTER} from "../components/NextChapter.js";
import ShowButtons from "../components/ShowButtons.js";
import LevelsAction from "../components/LevelsAction.js";
import HomeTemplate from "../components/HomeTemplate.js";
import ResetLevels from "../components/ResetLevels.js";
import MoreInfoButton from "../components/MoreInfoButton.js";

// the end time for the countdown timer
document.querySelector("title")!.innerText += CHAPTER;

const Home = async () => {
    // the root element [ dad ]
    const dad = <HTMLElement>document.getElementById("root");

    // method for set the buttons in levels variable
    await ShowButtons();

    // Home Template (first thing in home page)
    HomeTemplate(dad);

    // for the counter
    NextChapter(dad);

    // levels buttons
    LevelsAction();

    // more button
    MoreInfoButton();

    // reset buttons
    ResetLevels();
};

export default Home;