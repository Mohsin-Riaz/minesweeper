import React from 'react';
import BoardRow from './BoardRow';

const GameBoard = (props) => {
    const {
        gameboard,
        clickedSpaces,
        setClickedSpaces,
        updateSpaces,
        checkGameState,
        setGameState,
    } = props;
    return (
        <section key={gameboard} className="gameboard">
            {gameboard.map((row, rowNumber) => (
                <BoardRow
                    key={rowNumber}
                    row={row}
                    rowNumber={rowNumber}
                    clickedSpaces={clickedSpaces}
                    setClickedSpaces={setClickedSpaces}
                    updateSpaces={updateSpaces}
                    checkGameState={checkGameState}
                    setGameState={setGameState}
                />
            ))}
        </section>
    );
};

export default GameBoard;
