
function countCoinDenominations(totalMoneyCount) {
    const COIN_DENOMINATIONS = [100, 25, 10, 5, 1]
    let moneyRemaining = totalMoneyCount
    let coinCounts = ''

    for (const COIN of COIN_DENOMINATIONS) {
        if ( COIN <= moneyRemaining) {
            const NUMBER_OF_COINS = Math.floor(moneyRemaining / COIN)
            moneyRemaining = totalMoneyCount % COIN
            coinCounts += `${NUMBER_OF_COINS} * ${COIN}, `
        }
    } 

    return coinCounts
}

console.log(countCoinDenominations(3135))