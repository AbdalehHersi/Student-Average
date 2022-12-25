function studentAverageNum({ scores }) {
    const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
    const avg = Math.round(sum / scores.length) || 0;
    return avg;
}

function studentAverageLetter({ grades }) {
    const legend = {
        "A": 4,
        "A-": 3.76,
        "B+": 3.54,
        "B": 3.33,
        "B-": 3.12,
        "C+": 2.9,
        "C": 2.69,
        "C-": 2.47,
        "F": 0,
    }
    let numGrades = [];
    grades.forEach(grade => {
        const numericGrade = legend[grade]
        numGrades.push(numericGrade);
        return numGrades
    });
    const sum = numGrades.reduce((accumulator, currentValue) => accumulator + currentValue);
    const avg = +(sum / 3).toFixed(2) || 0;
    return avg;
}