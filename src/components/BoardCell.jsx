import React, { useEffect, useState } from 'react';
import {
    TbBomb,
    TbNumber0,
    TbNumber1,
    TbNumber2,
    TbNumber3,
    TbNumber4,
    TbNumber5,
    TbNumber6,
    TbNumber7,
    TbNumber8,
} from 'react-icons/tb';
const BoardCell = (props) => {
    const {
        cell,
        column,
        rowNumber,
        clickedSpaces,
        updateSpaces,
        setGameState,
    } = props;
    const [showState, setShowState] = useState(false);
    const icon = {
        '*': <TbBomb style={{ color: 'rgb(255,0,0)' }}></TbBomb>,
        0: <TbNumber0 style={{ color: 'rgb(255,255,255)' }}></TbNumber0>,
        1: <TbNumber1 style={{ color: 'rgb(255,223,223)' }}></TbNumber1>,
        2: <TbNumber2 style={{ color: 'rgb(255,191,191)' }}></TbNumber2>,
        3: <TbNumber3 style={{ color: 'rgb(255,159,159)' }}></TbNumber3>,
        4: <TbNumber4 style={{ color: 'rgb(255,127,127)' }}></TbNumber4>,
        5: <TbNumber5 style={{ color: 'rgb(255,95,95)' }}></TbNumber5>,
        6: <TbNumber6 style={{ color: 'rgb(255,63,63)' }}></TbNumber6>,
        7: <TbNumber7 style={{ color: 'rgb(255,31,31)' }}></TbNumber7>,
        8: <TbNumber8 style={{ color: 'rgb(255,0,0)' }}></TbNumber8>,
    };

    useEffect(() => {
        const show = clickedSpaces.includes(`${rowNumber},${column}`);
        if (show) {
            setShowState(true);
        }
    }, [showState, clickedSpaces]);

    function onClick(cell) {
        if (showState) return;
        setShowState(true);
        updateSpaces(`${rowNumber},${column}`);
        if (cell === '*')
            setGameState((c) => {
                return { ...c, gameBeingPlayed: false };
            });
    }

    return (
        <div
            key={(rowNumber, column)}
            className={
                showState
                    ? 'boardcell boardcell_show'
                    : 'boardcell boardcell_hide'
            }
            style={{ width: '5em' }}
            onClick={() => onClick(cell)}
        >
            {showState ? icon[cell] : ''}
        </div>
    );
};

export default BoardCell;
