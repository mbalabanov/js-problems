function towersOfHanoi(numberOfDiscs) {
    let minumumMoves = Math.pow(2, numberOfDiscs) - 1
    return minumumMoves
}

console.log(towersOfHanoi(3))
console.log(towersOfHanoi(8))