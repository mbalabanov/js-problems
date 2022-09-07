function towerOfHanoi(numberOfDiscs) {
    let minumumMoves = Math.pow(2, numberOfDiscs) - 1
    return minumumMoves
}

console.log(towerOfHanoi(3))
console.log(towerOfHanoi(8))