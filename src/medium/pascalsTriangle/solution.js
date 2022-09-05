function generatePascalsPyramid(height) {
    const PYRAMID = []

    for (let row = 1; row <= height; row++) {
        const CURRENT_ROW_CELLS = []

        for (let cell = 0; cell < row; cell++) {
            if (cell === 0) {
                CURRENT_ROW_CELLS.push(1)
                continue
            }

            if (cell === row - 1) {
                CURRENT_ROW_CELLS.push(1)
                continue
            }

            if (PYRAMID.length > 1 && row > 0 && cell > 0) {
                CURRENT_ROW_CELLS.push(PYRAMID[row - 2][cell - 1] + PYRAMID[row - 2][cell])
            }
        }
        
        PYRAMID.push(CURRENT_ROW_CELLS)
    }

    return PYRAMID
}

console.log(generatePascalsPyramid(10))

/* 
function addPaddingToEachRow(pyramid) {
    let spaces = Math.floor(pyramid.length / 2);

    for (let row = 0; row <= spaces; row++) {
        pyramid[row].unshift(' ')
        pyramid[row].push(' ')
        spaces--
    }
    return pyramid
}
*/

