const LevelAvailable = (levelToCheck: number) => {
    let isAvailable: boolean[] = [];
    for (let i = 1; i < levelToCheck; i++) {
        if (localStorage.getItem(`progress${i}`) === "100") {
            if (i === (levelToCheck - 1)) {
                isAvailable.push(true);
            }
        } else {
            isAvailable.push(false);
        }
    }

    return !isAvailable.includes(false);
};

export default LevelAvailable;