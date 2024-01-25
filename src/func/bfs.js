const bfs = (
    root,
    clickedSpaces,
    gameboard,
    boardSize,
    stack = [],
    results = []
) => {
    if (stack.length < 1) stack.push(root);
    while (stack.length > 0) {
        let [r, _, c] = stack.pop();
        const row = Number(r);
        const col = Number(c);
        results = [...results, `${row},${col}`];
        if (gameboard[row][col] !== 0) {
            continue;
        }
        for (let i = row - 1; i < row + 2; i++) {
            for (let j = col - 1; j < col + 2; j++) {
                if (0 > i || i > boardSize - 1 || 0 > j || j > boardSize - 1) {
                    continue;
                } //Out of bounds
                if (i == row && j == col) {
                    continue;
                } //Skip centered cell
                if (
                    clickedSpaces.includes(`${i},${j}`) ||
                    stack.includes(`${i},${j}`) ||
                    results.includes(`${i},${j}`)
                ) {
                    continue;
                } // Already accounted for
                stack.push(`${i},${j}`);
            }
        }

        const updated = bfs(
            `${row},${col}`,
            clickedSpaces,
            gameboard,
            boardSize,
            stack,
            results
        );
        results = [...results, ...updated];
    }

    return Array.from(new Set(results));
};

export default bfs;
