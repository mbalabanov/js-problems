# Pseudo Code Solution

The function takes a string.

Create an object with the the keys I, V, X, L, C, D and M and the respective numeric values.

Iterate through each letter.

Initialize an additionAccumulator to 0.

Initialize an subtractionAccumulator to 0.

If the first letter is I get the last letter of the word and check if it is not an I. If both conditions apply add the I to the subtractionAccumulator.

If the last letter is an I then add it to the additionAccumulator as mapped in the object.

If the letter is V, X, L, C, D or M then add them to the additionAccumulator as 5, 10, 50, 100, 500 or 1000 as they are mapped in the object.

Add whatever follows to the additionAccumulator.

return the difference between additionAccumulator and subtractionAccumulator.
