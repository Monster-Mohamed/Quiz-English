const QuizTemplate = (level: string) => {
    const dad = <HTMLElement>document.getElementById("root");
    dad.innerHTML =
        `
        <div class="quiz-parent parent-center">
            <div class="quiz-info">
                <div class="level">Level: <span>${level}</span></div>
                <div class="count">Questions: <span>10</span></div>
            </div>
            <div class="quiz-area">
                <h2></h2>
            </div>
            <div class="custom_radio"></div>
            <button class="submit-btn"> 
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                  fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <span>Next</span>
            </button>
            <div class="bullets">
                <div class="count-down"></div>
                <div class="spans"></div>
            </div>
            <div class="results"></div>
        </div>
        `;
};

export default QuizTemplate;