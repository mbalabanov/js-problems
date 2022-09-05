# Pseudo Code Solution

Create a function that takes a totalMoneyCount and outputs a string of coinDenominations and their count.

Create an array with the coinDenominations [100, 25, 10, 5, 1]

Iterate through the array of coinDenominations and check if the current coinDenomination is smaller than the totalMoneyCount left.

If smaller, then check remainder of totalMoneyCount and the currentCoinDenomination. Add the number of currentCoinDenomination to the

Subtract the number of already "used" currentCoinDenomination from the total amount.

Move on to the next denomination.

Return the string with the individual counts e.g. "1 * 25,  1 * 5, 4 * 1"