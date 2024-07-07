function studentsScore() {
    let score = prompt("Enter the score (0-100):");
    score = Number(score);

    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Not a valid score");
        return;
    }

    let grade;
    if (score > 79) {
        grade = 'A';
    } else if (score >= 60) {
        grade = 'B';
    } else if (score >= 49) {
        grade = 'C';
    } else if (score >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`The grade for ${score} is: ${grade}`);
}

studentsScore();
