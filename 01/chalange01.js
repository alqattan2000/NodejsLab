let calcGrades =  (currentMark , totalMark)=>{
    let avg = (currentMark/ totalMark) * 100
    if (avg >= 90) {
        return `you got ${avg}% Excellent -- Grade (A)`;
    } else if (avg >= 80) {
        return `you got ${avg}% Very Good -- Grade (B)`; 
    } else if (avg >=70) {
        return `you got ${avg}% Good -- Grade (C)`; 
    } else if (avg >=50) {
        return `you got ${avg}% poor -- Grade (D)`; 
    } else {
        return `you got ${avg}% failed -- Grade(F)`; 
    }
}

console.log(calcGrades(70,100))