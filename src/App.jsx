import { useEffect, useState } from 'react';
import { TbBomb } from 'react-icons/tb';
import EndModal from './components/EndModal';
import GameBoard from './components/GameBoard';
import StartModal from './components/StartModal';
import bfs from './func/bfs';
import { genBoard } from './func/genBoard';

function App() {
    const [clickedSpaces, setClickedSpaces] = useState([]);
    const [gameboard, setGameboard] = useState([]);
    const [gameState, setGameState] = useState({
        boardSize: 5,
        numberOfBombs: 5,
        gameBeingPlayed: true,
    });
    const [endGame, setEndGame] = useState('');

    useEffect(() => {
        checkGameState();
    }, [clickedSpaces]);

    function updateSpaces(rowCol) {
        const updatedClickedSpaces = bfs(
            rowCol,
            clickedSpaces,
            gameboard,
            gameState.boardSize
        );
        setClickedSpaces([...clickedSpaces, ...updatedClickedSpaces]);
        // setClickedSpaces([...clickedSpaces, rowCol]);
    }

    function checkGameState() {
        const { boardSize, numberOfBombs, gameBeingPlayed } = gameState;
        if (gameBeingPlayed) {
            if (clickedSpaces.length === Math.pow(boardSize, 2) - numberOfBombs)
                gameWin();
        } else if (!gameBeingPlayed) gameLoss();
    }

    function gameWin() {
        setGameState((prevState) => ({ ...prevState, gameBeingPlayed: false }));
        setEndGame('You Win!');
    }
    function gameLoss() {
        setGameState((prevState) => ({ ...prevState, gameBeingPlayed: false }));
        setEndGame('You Lose!');
    }

    function gameStart(boardSize, numberOfBombs) {
        setGameboard(genBoard(boardSize, numberOfBombs));
        setGameState({
            boardSize: boardSize,
            numberOfBombs: numberOfBombs,
            gameBeingPlayed: true,
        });
    }

    return (
        <>
            <h1
                style={{
                    display: 'flex',
                    gap: '.25em',
                    padding: '.25em',
                    backgroundColor: 'hsla(0,0%,13%)',
                    border: '1px solid hsla(0,0%,50%)',
                    borderRadius: '.1em',
                    // alignItems: 'center',
                    placeContent: 'center',
                    // filter: 'drop-shadow(1px 1px 2px rgba(255,100,255,.5))',
                    color: 'white',
                    userSelect: 'none',
                }}
            >
                Minesweeper
                <TbBomb
                    style={{
                        marginTop: 'auto',
                        color: 'red',
                        filter: 'drop-shadow(1px 1px 2px rgba(255,100,0,.5))',
                    }}
                />
            </h1>

            <StartModal gameStart={gameStart} />
            <EndModal endGame={endGame} />
            {
                <GameBoard
                    gameboard={gameboard}
                    clickedSpaces={clickedSpaces}
                    setClickedSpaces={setClickedSpaces}
                    updateSpaces={updateSpaces}
                    checkGameState={checkGameState}
                    setGameState={setGameState}
                />
            }
        </>
    );
}

export default App;
