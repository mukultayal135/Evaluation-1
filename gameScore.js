function getScore(rolls) {
    let runningScore = 0;
    let frame = 1, specialCase = 0;
    let newFrame = 0;
    for (let it = 0; it < rolls.length;) {
        if (rolls[it] === 10 && frame != 10) {
            frame++;
            runningScore += (rolls[it] + rolls[it + 1] + rolls[it + 2]);
            it++;

        }
        else if (rolls[it] + rolls[it + 1] === 10 && frame != 10) {
            runningScore += (10 + rolls[it + 2]);
            it += 2;
            frame++;
        }
        else if (frame != 10) {
            runningScore += (rolls[it] + rolls[it + 1]);
            it += 2;
            frame++;
        }
        else {
            if (rolls[it] != 10 && rolls[it] + rolls[it + 1] != 10) {
                runningScore += (rolls[it] + rolls[it + 1]);
                it += 2;
                frame++;
            }
            else if (rolls[it] === 10) {
                specialCase = 1;
                runningScore += (rolls[it] + rolls[it + 1] + rolls[it + 2]);
                frame++;
            }
            else {
                specialCase = 1;
                runningScore += (10 + rolls[it + 2]);
                frame++;
            }
        }
        console.log(runningScore);
    }
    return runningScore;
}

// console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));