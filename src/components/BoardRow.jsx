import React from 'react';

import BoardCell from './BoardCell';

const BoardRow = (props) => {
    const {
        rowNumber,
        row,
        clickedSpaces,
        setClickedSpaces,
        updateSpaces,
        checkGameState,
        setGameState,
    } = props;

    return (
        <div key={rowNumber} className="boardrow">
            {row.map((cell, column) => (
                <BoardCell
                    key={(rowNumber, column)}
                    cell={cell}
                    rowNumber={rowNumber}
                    column={column}
                    clickedSpaces={clickedSpaces}
                    setClickedSpaces={setClickedSpaces}
                    updateSpaces={updateSpaces}
                    checkGameState={checkGameState}
                    setGameState={setGameState}
                />
            ))}
        </div>
    );
};

export default BoardRow;
