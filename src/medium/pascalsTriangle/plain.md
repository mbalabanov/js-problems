# Plain English Solution

The numbers of Pascal's triangle are generated from the top row downwards starting with a single number and the numbers per row.

In each row the left and right outer cells of the pyramid are the number from the top row. In each row, the numbers in the inner cells in between are the sum of the inner numbers above.

---

Iterate from 1 to 10 and generate each row (probably an array).

1. Starting with 1, add this to the array of the first row.
2. The second row consists of two cells that contain the same number as the first row.
3. The third row has the original number 1 as the left and right outer cells and the sum of the two numbers above it.
4. The fourth row has the original number 1 as the left and right outer cells. The first inner cell is the sum of the number in the first cell and the the number in the second cell in the row above.
