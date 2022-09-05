function find3or5() {
    let accumulator = 0;

    for (let myNumber = 1; myNumber <= 1000; myNumber++) {
        if (
            myNumber % 3 === 0 ||
            myNumber % 5 === 0
        ) {
            console.log(myNumber)
            accumulator += myNumber
        }
    }
    return accumulator
}

console.log(find3or5())