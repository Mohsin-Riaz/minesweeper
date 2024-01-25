import React, { useEffect, useRef, useState } from 'react';

const StartModal = (props) => {
    const { gameStart } = props;
    const [modalState, setModalState] = useState(true);
    const [boardInput, setBoardInput] = useState(5);
    const [bombsInput, setBombsInput] = useState(5);

    function onClick() {
        gameStart(boardInput, bombsInput);
        setModalState(false);
    }

    return (
        <div className="modal" style={{ display: modalState ? '' : 'none' }}>
            <h1>Preferences</h1>
            <div className="modal_slider">
                <div className="modal_slider_text">Board Size</div>
                <input
                    className="modal_slider_input"
                    type="range"
                    min={5}
                    max={7}
                    defaultValue={5}
                    onChange={(e) => {
                        setBoardInput(Number(e.currentTarget.value));
                    }}
                />
                <div className="modal_slider_values">
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
            <div className="modal_slider">
                <div className="modal_slider_text">Number of Bombs</div>
                <input
                    className="modal_slider_input"
                    type="range"
                    min={5}
                    max={7}
                    defaultValue={5}
                    onChange={(e) => {
                        setBombsInput(Number(e.currentTarget.value));
                    }}
                />
                <div className="modal_slider_values">
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
            <button className="modal_button" onClick={() => onClick()}>
                start
            </button>
        </div>
    );
};

export default StartModal;
