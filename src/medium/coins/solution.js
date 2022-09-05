function countCoinDenominations(totalMoneyCount) {
    const COIN_DENOMINATIONS = [100, 25, 10, 5, 1]
    let moneyRemaining = totalMoneyCount
    let coinCounts = `(${totalMoneyCount}) ➞ ` 

    for (const COIN of COIN_DENOMINATIONS) {
        if ( COIN <= moneyRemaining) {
            const NUMBER_OF_COINS = Math.floor(moneyRemaining / COIN)
            moneyRemaining = totalMoneyCount % COIN
            coinCounts += `${NUMBER_OF_COINS} * ${COIN}`
            if ( COIN > 1) {
                coinCounts += `, `
            }
        }
    } 

    return coinCounts
}

console.log(countCoinDenominations(107))
console.log(countCoinDenominations(57))
console.log(countCoinDenominations(34))
console.log(countCoinDenominations(226))