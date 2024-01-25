export const genBoard = (boardSize = 5, noOfbombs = 5) => {
    const bombLoc = genBombs(boardSize, noOfbombs);
    return genNumbers(boardSize, bombLoc);
};

const genBombs = (boardSize, noOfbombs) => {
    const bombLoc = new Set();
    while (bombLoc.size < noOfbombs) {
        const randRow = Math.floor(Math.random() * boardSize);
        const randCol = Math.floor(Math.random() * boardSize);
        if (!bombLoc.has(`${randRow},${randCol}`))
            bombLoc.add(`${randRow},${randCol}`);
    }

    return bombLoc;
};

const genNumbers = (boardSize, bombLoc) => {
    const gameboard = new Array(boardSize)
        .fill(0)
        .map(() => Array(boardSize).fill(0));

    bombLoc.forEach((v) => {
        const [r, _, c] = v;
        const row = Number(r);
        const col = Number(c);
        gameboard[row][col] = '*';

        genNeighbours(gameboard, boardSize, row, col);
    });
    return gameboard;
};

function genNeighbours(gameboard, boardSize, row, col) {
    for (let i = row - 1; i < row + 2; i++) {
        for (let j = col - 1; j < col + 2; j++) {
            if (0 > i || i > boardSize - 1 || 0 > j || j > boardSize - 1)
                continue;
            if (gameboard[i][j] === '*') continue;
            gameboard[i][j] = gameboard[i][j] + 1;
        }
    }
}
